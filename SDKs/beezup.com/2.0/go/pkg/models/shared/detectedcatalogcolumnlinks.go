package shared

type DetectedCatalogColumnLinks struct {
	Configure map[string]interface{} `json:"configure,omitempty"`
	Ignore    map[string]interface{} `json:"ignore,omitempty"`
	Map       map[string]interface{} `json:"map,omitempty"`
	Reattend  map[string]interface{} `json:"reattend,omitempty"`
	Unmap     map[string]interface{} `json:"unmap,omitempty"`
}
