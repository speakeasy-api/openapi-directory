package operations

type PostAuthOauthTokenRequestBody struct {
	ClientID     string `form:"name=client_id"`
	ClientSecret string `form:"name=client_secret"`
	GrantType    string `form:"name=grant_type"`
	Scope        string `form:"name=scope"`
}

type PostAuthOauthTokenRequest struct {
	Request PostAuthOauthTokenRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostAuthOauthTokenResponse struct {
	ContentType string
	StatusCode  int64
}
