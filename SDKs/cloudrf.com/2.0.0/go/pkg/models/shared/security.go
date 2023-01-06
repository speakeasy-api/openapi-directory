package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=key"`
}

type Security struct {
	APIKeyAuth SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}
