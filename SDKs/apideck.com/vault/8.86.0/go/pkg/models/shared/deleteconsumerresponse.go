package shared

type DeleteConsumerResponse struct {
	Data       interface{} `json:"data"`
	Status     string      `json:"status"`
	StatusCode int64       `json:"status_code"`
}
