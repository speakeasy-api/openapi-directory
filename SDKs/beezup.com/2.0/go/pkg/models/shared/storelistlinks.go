package shared

// StoreListLinks
// The action links you can do globally on stores
type StoreListLinks struct {
	CreateStore *LinksCreateStoreLink `json:"createStore,omitempty"`
	Self        *LinksGetStoresLink   `json:"self,omitempty"`
}
