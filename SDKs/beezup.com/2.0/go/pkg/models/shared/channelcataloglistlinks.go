package shared

// ChannelCatalogListLinks
// Indicates how global actions you can do like how to create a channel catalog, exclusion filter operators, etc...
type ChannelCatalogListLinks struct {
	Add             map[string]interface{} `json:"add,omitempty"`
	BeezUPColumns   map[string]interface{} `json:"beezUPColumns,omitempty"`
	FilterOperators map[string]interface{} `json:"filterOperators,omitempty"`
	Self            map[string]interface{} `json:"self,omitempty"`
}
