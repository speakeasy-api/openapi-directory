package shared

type SchemeAPIKeyAuth struct {
	APIKey string `security:"name=apikey"`
}

type Security struct {
	APIKeyAuth SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
}
