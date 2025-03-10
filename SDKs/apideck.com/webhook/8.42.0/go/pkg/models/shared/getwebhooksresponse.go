package shared

type GetWebhooksResponse struct {
	Data       []Webhook `json:"data"`
	Links      *Links    `json:"links"`
	Meta       *Meta     `json:"meta"`
	Status     string    `json:"status"`
	StatusCode int64     `json:"status_code"`
}
