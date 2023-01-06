package shared

type Institution struct {
	Domain *string `json:"domain,omitempty"`
	ID     *int64  `json:"id,omitempty"`
	Name   *string `json:"name,omitempty"`
}
