package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateBackendAuthPathParams struct {
	AppID                  string `pathParam:"style=simple,explode=false,name=appId"`
	BackendEnvironmentName string `pathParam:"style=simple,explode=false,name=backendEnvironmentName"`
}

type UpdateBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
// Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs struct {
	UnauthenticatedLogin map[string]interface{} `json:"UnauthenticatedLogin,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
// The configuration for the email sent when an app user forgets their password.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings struct {
	EmailMessage map[string]interface{} `json:"EmailMessage,omitempty"`
	EmailSubject map[string]interface{} `json:"EmailSubject,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
// The configuration for the SMS message sent when an Amplify app user forgets their password.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings struct {
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
// Describes the forgot password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword struct {
	DeliveryMethod map[string]interface{}                                                                `json:"DeliveryMethod,omitempty"`
	EmailSettings  *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings `json:"EmailSettings,omitempty"`
	SmsSettings    *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings   `json:"SmsSettings,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
// The settings of your MFA configuration for the backend of your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings struct {
	MfaTypes   map[string]interface{} `json:"MfaTypes,omitempty"`
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
// Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa struct {
	MFAMode  *shared.MfaModeEnum                                                   `json:"MFAMode,omitempty"`
	Settings *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings `json:"Settings,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
// Describes third-party social federation configurations for allowing your users to sign in with OAuth.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings struct {
	Facebook        *shared.BackendAuthSocialProviderConfig `json:"Facebook,omitempty"`
	Google          *shared.BackendAuthSocialProviderConfig `json:"Google,omitempty"`
	LoginWithAmazon *shared.BackendAuthSocialProviderConfig `json:"LoginWithAmazon,omitempty"`
	SignInWithApple *shared.BackendAuthAppleProviderConfig  `json:"SignInWithApple,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
// Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth struct {
	DomainPrefix           map[string]interface{}                                                                `json:"DomainPrefix,omitempty"`
	OAuthGrantType         map[string]interface{}                                                                `json:"OAuthGrantType,omitempty"`
	OAuthScopes            map[string]interface{}                                                                `json:"OAuthScopes,omitempty"`
	RedirectSignInURIs     map[string]interface{}                                                                `json:"RedirectSignInURIs,omitempty"`
	RedirectSignOutURIs    map[string]interface{}                                                                `json:"RedirectSignOutURIs,omitempty"`
	SocialProviderSettings *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings `json:"SocialProviderSettings,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
// Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy struct {
	AdditionalConstraints map[string]interface{} `json:"AdditionalConstraints,omitempty"`
	MinimumLength         map[string]interface{} `json:"MinimumLength,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs
// Describes the authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
type UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs struct {
	ForgotPassword *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword `json:"ForgotPassword,omitempty"`
	Mfa            *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa            `json:"Mfa,omitempty"`
	OAuth          *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth          `json:"OAuth,omitempty"`
	PasswordPolicy *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy `json:"PasswordPolicy,omitempty"`
}

// UpdateBackendAuthRequestBodyResourceConfig
// Defines the resource configuration when updating an authentication resource in your Amplify project.
type UpdateBackendAuthRequestBodyResourceConfig struct {
	AuthResources       map[string]interface{}                                         `json:"AuthResources,omitempty"`
	IdentityPoolConfigs *UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs `json:"IdentityPoolConfigs,omitempty"`
	Service             map[string]interface{}                                         `json:"Service,omitempty"`
	UserPoolConfigs     *UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs     `json:"UserPoolConfigs,omitempty"`
}

type UpdateBackendAuthRequestBody struct {
	ResourceConfig UpdateBackendAuthRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName   string                                     `json:"resourceName"`
}

type UpdateBackendAuthRequest struct {
	PathParams UpdateBackendAuthPathParams
	Headers    UpdateBackendAuthHeaders
	Request    UpdateBackendAuthRequestBody `request:"mediaType=application/json"`
}

type UpdateBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	UpdateBackendAuthResponse *shared.UpdateBackendAuthResponse
}
