package shared

// StoreLinks
// The action links for this store
type StoreLinks struct {
	DeleteStore map[string]interface{} `json:"deleteStore,omitempty"`
	Self        map[string]interface{} `json:"self,omitempty"`
	Share       map[string]interface{} `json:"share,omitempty"`
	Shares      map[string]interface{} `json:"shares,omitempty"`
	UpdateStore map[string]interface{} `json:"updateStore,omitempty"`
}
