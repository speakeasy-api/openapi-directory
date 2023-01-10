package shared

type SchemeOAuth2 struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=x-functions-key"`
}
