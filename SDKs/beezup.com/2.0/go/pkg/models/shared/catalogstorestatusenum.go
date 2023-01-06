package shared

type CatalogStoreStatusEnum string

const (
	CatalogStoreStatusEnumOk       CatalogStoreStatusEnum = "OK"
	CatalogStoreStatusEnumFailed   CatalogStoreStatusEnum = "Failed"
	CatalogStoreStatusEnumOutdated CatalogStoreStatusEnum = "Outdated"
)
