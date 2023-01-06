package shared

// AuthenticateCognitoActionConfig
// Request parameters to use when integrating with Amazon Cognito to authenticate users.
type AuthenticateCognitoActionConfig struct {
	AuthenticationRequestExtraParams map[string]string
	OnUnauthenticatedRequest         *AuthenticateCognitoActionConditionalBehaviorEnumEnum
	Scope                            *string
	SessionCookieName                *string
	SessionTimeout                   map[string]interface{}
	UserPoolArn                      string
	UserPoolClientID                 string
	UserPoolDomain                   string
}
