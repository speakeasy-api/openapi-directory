package shared

// AuthenticateCognitoActionConfig1
// Request parameters to use when integrating with Amazon Cognito to authenticate users.
type AuthenticateCognitoActionConfig1 struct {
	AuthenticationRequestExtraParams map[string]string
	OnUnauthenticatedRequest         *AuthenticateCognitoActionConditionalBehaviorEnumEnum
	Scope                            *string
	SessionCookieName                *string
	SessionTimeout                   *int64
	UserPoolArn                      string
	UserPoolClientID                 string
	UserPoolDomain                   string
}
