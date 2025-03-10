package shared

type GetUsersResponseOutput struct {
	Data       []UserOutput `json:"data"`
	Links      *Links       `json:"links,omitempty"`
	Meta       *Meta        `json:"meta,omitempty"`
	Operation  string       `json:"operation"`
	Resource   string       `json:"resource"`
	Service    string       `json:"service"`
	Status     string       `json:"status"`
	StatusCode int64        `json:"status_code"`
}
