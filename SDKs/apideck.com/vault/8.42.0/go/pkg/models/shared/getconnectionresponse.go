package shared

type GetConnectionResponse struct {
	Data       Connection `json:"data"`
	Status     string     `json:"status"`
	StatusCode int64      `json:"status_code"`
}
