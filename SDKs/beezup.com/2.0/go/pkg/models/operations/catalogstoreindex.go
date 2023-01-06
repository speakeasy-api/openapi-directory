package operations

import (
	"openapi/pkg/models/shared"
)

type CatalogStoreIndexPathParams struct {
	StoreID string `pathParam:"style=simple,explode=false,name=storeId"`
}

type CatalogStoreIndexRequest struct {
	PathParams CatalogStoreIndexPathParams
}

type CatalogStoreIndexResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	CatalogStoreIndex                *shared.CatalogStoreIndex
}
