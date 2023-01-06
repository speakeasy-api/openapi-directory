package shared

// UserAuthConfigInfo
// Returns the details of authentication used by a proxy to log in as a specific database user.
type UserAuthConfigInfo struct {
	AuthScheme  *AuthSchemeEnum
	Description *string
	IAMAuth     *IamAuthModeEnum
	SecretArn   *string
	UserName    *string
}
