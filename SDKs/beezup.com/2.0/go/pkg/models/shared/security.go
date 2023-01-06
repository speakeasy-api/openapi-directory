package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=Ocp-Apim-Subscription-Key"`
}
