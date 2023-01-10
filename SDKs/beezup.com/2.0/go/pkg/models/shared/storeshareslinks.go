package shared

type StoreSharesLinks struct {
	Self  *LinksGetStoreSharesLink `json:"self,omitempty"`
	Share *LinksShareStoreLink     `json:"share,omitempty"`
}
