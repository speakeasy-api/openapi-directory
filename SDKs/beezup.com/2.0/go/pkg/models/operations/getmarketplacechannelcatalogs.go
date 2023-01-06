package operations

import (
	"openapi/pkg/models/shared"
)

type GetMarketplaceChannelCatalogsQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetMarketplaceChannelCatalogsRequest struct {
	QueryParams GetMarketplaceChannelCatalogsQueryParams
}

type GetMarketplaceChannelCatalogsResponse struct {
	ContentType                   string
	StatusCode                    int64
	MarketplaceChannelCatalogList *shared.MarketplaceChannelCatalogList
}
