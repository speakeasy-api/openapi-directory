package shared

// StoreLinks
// The action links for this store
type StoreLinks struct {
	DeleteStore *LinksDeleteStoreLink    `json:"deleteStore,omitempty"`
	Self        *LinksGetStoreLink       `json:"self,omitempty"`
	Share       *LinksShareStoreLink     `json:"share,omitempty"`
	Shares      *LinksGetStoreSharesLink `json:"shares,omitempty"`
	UpdateStore *LinksUpdateStoreLink    `json:"updateStore,omitempty"`
}
