package shared

type UrlsAggsQuery struct {
	Aggs    []map[string]interface{} `json:"aggs,omitempty"`
	Filters map[string]interface{}   `json:"filters,omitempty"`
}
