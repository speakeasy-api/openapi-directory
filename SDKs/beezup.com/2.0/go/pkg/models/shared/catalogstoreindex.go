package shared

type CatalogStoreIndex struct {
	Links  *CatalogStoreIndexLinks `json:"links,omitempty"`
	Status *CatalogStoreStatusEnum `json:"status,omitempty"`
}
