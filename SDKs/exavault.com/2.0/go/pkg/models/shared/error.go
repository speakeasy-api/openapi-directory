package shared

type Error struct {
	Code   *string                `json:"code,omitempty"`
	Detail *string                `json:"detail,omitempty"`
	Meta   map[string]interface{} `json:"meta,omitempty"`
	Title  *string                `json:"title,omitempty"`
}
