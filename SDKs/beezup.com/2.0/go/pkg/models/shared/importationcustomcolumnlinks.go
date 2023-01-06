package shared

type ImportationCustomColumnLinks struct {
	Delete             map[string]interface{} `json:"delete"`
	Expression         map[string]interface{} `json:"expression"`
	Map                map[string]interface{} `json:"map,omitempty"`
	ProductSampleValue map[string]interface{} `json:"productSampleValue,omitempty"`
	Save               map[string]interface{} `json:"save"`
	Unmap              map[string]interface{} `json:"unmap,omitempty"`
}
