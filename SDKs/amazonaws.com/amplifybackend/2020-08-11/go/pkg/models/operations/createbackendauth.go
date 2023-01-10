package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBackendAuthPathParams struct {
	AppID string `pathParam:"style=simple,explode=false,name=appId"`
}

type CreateBackendAuthHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs
// Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
type CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs struct {
	IdentityPoolName     map[string]interface{} `json:"IdentityPoolName"`
	UnauthenticatedLogin map[string]interface{} `json:"UnauthenticatedLogin"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings
// The configuration for the email sent when an app user forgets their password.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings struct {
	EmailMessage map[string]interface{} `json:"EmailMessage,omitempty"`
	EmailSubject map[string]interface{} `json:"EmailSubject,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings
// The configuration for the SMS message sent when an app user forgets their password.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings struct {
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword
// Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword struct {
	DeliveryMethod map[string]interface{}                                                                `json:"DeliveryMethod"`
	EmailSettings  *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings `json:"EmailSettings,omitempty"`
	SmsSettings    *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings   `json:"SmsSettings,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings
// Describes the configuration settings and methods for your Amplify app users to use MFA.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings struct {
	MfaTypes   map[string]interface{} `json:"MfaTypes,omitempty"`
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa
// Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa struct {
	MFAMode  shared.MfaModeEnum                                                    `json:"MFAMode"`
	Settings *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings `json:"Settings,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings
// The settings for using social providers to access your Amplify app.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings struct {
	Facebook        *shared.BackendAuthSocialProviderConfig `json:"Facebook,omitempty"`
	Google          *shared.BackendAuthSocialProviderConfig `json:"Google,omitempty"`
	LoginWithAmazon *shared.BackendAuthSocialProviderConfig `json:"LoginWithAmazon,omitempty"`
	SignInWithApple *shared.BackendAuthAppleProviderConfig  `json:"SignInWithApple,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth
// Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth struct {
	DomainPrefix           map[string]interface{}                                                                `json:"DomainPrefix,omitempty"`
	OAuthGrantType         map[string]interface{}                                                                `json:"OAuthGrantType"`
	OAuthScopes            map[string]interface{}                                                                `json:"OAuthScopes"`
	RedirectSignInURIs     map[string]interface{}                                                                `json:"RedirectSignInURIs"`
	RedirectSignOutURIs    map[string]interface{}                                                                `json:"RedirectSignOutURIs"`
	SocialProviderSettings *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings `json:"SocialProviderSettings,omitempty"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy
// Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy struct {
	AdditionalConstraints map[string]interface{} `json:"AdditionalConstraints,omitempty"`
	MinimumLength         map[string]interface{} `json:"MinimumLength"`
}

// CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs
// Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
type CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs struct {
	ForgotPassword           *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword `json:"ForgotPassword,omitempty"`
	Mfa                      *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa            `json:"Mfa,omitempty"`
	OAuth                    *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth          `json:"OAuth,omitempty"`
	PasswordPolicy           *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy `json:"PasswordPolicy,omitempty"`
	RequiredSignUpAttributes map[string]interface{}                                                   `json:"RequiredSignUpAttributes"`
	SignInMethod             map[string]interface{}                                                   `json:"SignInMethod"`
	UserPoolName             map[string]interface{}                                                   `json:"UserPoolName"`
}

// CreateBackendAuthRequestBodyResourceConfig
// Defines the resource configuration when creating an auth resource in your Amplify project.
type CreateBackendAuthRequestBodyResourceConfig struct {
	AuthResources       map[string]interface{}                                         `json:"AuthResources,omitempty"`
	IdentityPoolConfigs *CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs `json:"IdentityPoolConfigs,omitempty"`
	Service             map[string]interface{}                                         `json:"Service,omitempty"`
	UserPoolConfigs     *CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs     `json:"UserPoolConfigs,omitempty"`
}

type CreateBackendAuthRequestBody struct {
	BackendEnvironmentName string                                     `json:"backendEnvironmentName"`
	ResourceConfig         CreateBackendAuthRequestBodyResourceConfig `json:"resourceConfig"`
	ResourceName           string                                     `json:"resourceName"`
}

type CreateBackendAuthRequest struct {
	PathParams CreateBackendAuthPathParams
	Headers    CreateBackendAuthHeaders
	Request    CreateBackendAuthRequestBody `request:"mediaType=application/json"`
}

type CreateBackendAuthResponse struct {
	BadRequestException       *interface{}
	ContentType               string
	CreateBackendAuthResponse *shared.CreateBackendAuthResponse
	GatewayTimeoutException   *interface{}
	NotFoundException         *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
}
