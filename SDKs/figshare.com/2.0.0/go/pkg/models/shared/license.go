package shared

type License struct {
	Name  *string `json:"name,omitempty"`
	URL   *string `json:"url,omitempty"`
	Value *int64  `json:"value,omitempty"`
}
