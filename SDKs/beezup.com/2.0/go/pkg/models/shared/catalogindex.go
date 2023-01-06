package shared

type CatalogIndex struct {
	Links      CatalogIndexLinks      `json:"links"`
	LovLinks   CatalogIndexLovLinks   `json:"lovLinks"`
	StoreLinks *CatalogStoreIndexList `json:"storeLinks,omitempty"`
}
