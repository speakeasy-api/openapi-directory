package shared

type CreateConsumerResponse struct {
	Data       Consumer `json:"data"`
	Status     string   `json:"status"`
	StatusCode int64    `json:"status_code"`
}
