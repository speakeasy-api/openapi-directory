package shared

// GetBackendAuthResponseResourceConfigIdentityPoolConfigs
// Describes the authorization configuration for the Amazon Cognito identity pool, provisioned as a part of your auth resource in the Amplify project.
type GetBackendAuthResponseResourceConfigIdentityPoolConfigs struct {
	IdentityPoolName     map[string]interface{} `json:"IdentityPoolName"`
	UnauthenticatedLogin map[string]interface{} `json:"UnauthenticatedLogin"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings
// The configuration for the email sent when an app user forgets their password.
type GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings struct {
	EmailMessage map[string]interface{} `json:"EmailMessage,omitempty"`
	EmailSubject map[string]interface{} `json:"EmailSubject,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings
// The configuration for the SMS message sent when an app user forgets their password.
type GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings struct {
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword
// Describes the forgotten password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword struct {
	DeliveryMethod map[string]interface{}                                                          `json:"DeliveryMethod"`
	EmailSettings  *GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordEmailSettings `json:"EmailSettings,omitempty"`
	SmsSettings    *GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPasswordSmsSettings   `json:"SmsSettings,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings
// Describes the configuration settings and methods for your Amplify app users to use MFA.
type GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings struct {
	MfaTypes   map[string]interface{} `json:"MfaTypes,omitempty"`
	SmsMessage map[string]interface{} `json:"SmsMessage,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsMfa
// Describes whether to apply multi-factor authentication policies for your Amazon Cognito user pool configured as a part of your Amplify project.
type GetBackendAuthResponseResourceConfigUserPoolConfigsMfa struct {
	MFAMode  MfaModeEnum                                                     `json:"MFAMode"`
	Settings *GetBackendAuthResponseResourceConfigUserPoolConfigsMfaSettings `json:"Settings,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings
// The settings for using social providers to access your Amplify app.
type GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings struct {
	Facebook        *BackendAuthSocialProviderConfig `json:"Facebook,omitempty"`
	Google          *BackendAuthSocialProviderConfig `json:"Google,omitempty"`
	LoginWithAmazon *BackendAuthSocialProviderConfig `json:"LoginWithAmazon,omitempty"`
	SignInWithApple *BackendAuthAppleProviderConfig  `json:"SignInWithApple,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth
// Describes the OAuth policy and rules for your Amazon Cognito user pool, configured as a part of your Amplify project.
type GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth struct {
	DomainPrefix           map[string]interface{}                                                          `json:"DomainPrefix,omitempty"`
	OAuthGrantType         map[string]interface{}                                                          `json:"OAuthGrantType"`
	OAuthScopes            map[string]interface{}                                                          `json:"OAuthScopes"`
	RedirectSignInURIs     map[string]interface{}                                                          `json:"RedirectSignInURIs"`
	RedirectSignOutURIs    map[string]interface{}                                                          `json:"RedirectSignOutURIs"`
	SocialProviderSettings *GetBackendAuthResponseResourceConfigUserPoolConfigsOAuthSocialProviderSettings `json:"SocialProviderSettings,omitempty"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy
// Describes the password policy for your Amazon Cognito user pool, configured as a part of your Amplify project.
type GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy struct {
	AdditionalConstraints map[string]interface{} `json:"AdditionalConstraints,omitempty"`
	MinimumLength         map[string]interface{} `json:"MinimumLength"`
}

// GetBackendAuthResponseResourceConfigUserPoolConfigs
// Describes authentication configuration for the Amazon Cognito user pool, provisioned as a part of your auth resource in the Amplify project.
type GetBackendAuthResponseResourceConfigUserPoolConfigs struct {
	ForgotPassword           *GetBackendAuthResponseResourceConfigUserPoolConfigsForgotPassword `json:"ForgotPassword,omitempty"`
	Mfa                      *GetBackendAuthResponseResourceConfigUserPoolConfigsMfa            `json:"Mfa,omitempty"`
	OAuth                    *GetBackendAuthResponseResourceConfigUserPoolConfigsOAuth          `json:"OAuth,omitempty"`
	PasswordPolicy           *GetBackendAuthResponseResourceConfigUserPoolConfigsPasswordPolicy `json:"PasswordPolicy,omitempty"`
	RequiredSignUpAttributes map[string]interface{}                                             `json:"RequiredSignUpAttributes"`
	SignInMethod             map[string]interface{}                                             `json:"SignInMethod"`
	UserPoolName             map[string]interface{}                                             `json:"UserPoolName"`
}

// GetBackendAuthResponseResourceConfig
// The resource configuration for authorization requests to the backend of your Amplify project.
type GetBackendAuthResponseResourceConfig struct {
	AuthResources       map[string]interface{}                                   `json:"AuthResources"`
	IdentityPoolConfigs *GetBackendAuthResponseResourceConfigIdentityPoolConfigs `json:"IdentityPoolConfigs,omitempty"`
	Service             map[string]interface{}                                   `json:"Service"`
	UserPoolConfigs     GetBackendAuthResponseResourceConfigUserPoolConfigs      `json:"UserPoolConfigs"`
}

type GetBackendAuthResponse struct {
	AppID                  map[string]interface{}                `json:"AppId,omitempty"`
	BackendEnvironmentName map[string]interface{}                `json:"BackendEnvironmentName,omitempty"`
	Error                  map[string]interface{}                `json:"Error,omitempty"`
	ResourceConfig         *GetBackendAuthResponseResourceConfig `json:"ResourceConfig,omitempty"`
	ResourceName           map[string]interface{}                `json:"ResourceName,omitempty"`
}
