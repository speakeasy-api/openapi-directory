package shared

type CreateSubscriptionRequest struct {
	MerchantApplicationName    string  `json:"merchantApplicationName"`
	MerchantApplicationVersion string  `json:"merchantApplicationVersion"`
	MerchantEmailAlert         *string `json:"merchantEmailAlert,omitempty"`
	Name                       string  `json:"name"`
	TargetURL                  string  `json:"targetUrl"`
}
