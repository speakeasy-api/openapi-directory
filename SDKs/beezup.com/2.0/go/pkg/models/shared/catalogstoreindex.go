package shared

type CatalogStoreIndex struct {
	Links  CatalogStoreIndexLinks `json:"links"`
	Status CatalogStoreStatusEnum `json:"status"`
}
