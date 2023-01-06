package shared

type WebhookResponse struct {
	Data           []Webhook     `json:"data,omitempty"`
	Included       []interface{} `json:"included,omitempty"`
	ResponseStatus *int64        `json:"responseStatus,omitempty"`
}
