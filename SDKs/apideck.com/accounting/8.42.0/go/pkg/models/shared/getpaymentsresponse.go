package shared

type GetPaymentsResponse struct {
	Data       []Payment `json:"data"`
	Links      *Links    `json:"links"`
	Meta       *Meta     `json:"meta"`
	Operation  string    `json:"operation"`
	Resource   string    `json:"resource"`
	Service    string    `json:"service"`
	Status     string    `json:"status"`
	StatusCode int64     `json:"status_code"`
}
