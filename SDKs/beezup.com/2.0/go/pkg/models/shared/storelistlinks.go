package shared

// StoreListLinks
// The action links you can do globally on stores
type StoreListLinks struct {
	CreateStore map[string]interface{} `json:"createStore,omitempty"`
	Self        map[string]interface{} `json:"self,omitempty"`
}
