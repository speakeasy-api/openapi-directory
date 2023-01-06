package shared

type UrlsQuery struct {
	Fields  []string                 `json:"fields,omitempty"`
	Filters map[string]interface{}   `json:"filters,omitempty"`
	Sort    []map[string]interface{} `json:"sort,omitempty"`
}
