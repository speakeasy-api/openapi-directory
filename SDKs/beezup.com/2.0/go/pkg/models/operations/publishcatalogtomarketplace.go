package operations

import (
	"openapi/pkg/models/shared"
)

type PublishCatalogToMarketplacePathParams struct {
	AccountID                int32  `pathParam:"style=simple,explode=false,name=accountId"`
	MarketplaceTechnicalCode string `pathParam:"style=simple,explode=false,name=marketplaceTechnicalCode"`
}

type PublishCatalogToMarketplaceRequest struct {
	PathParams PublishCatalogToMarketplacePathParams
	Request    shared.PublishCatalogToMarketplaceRequest `request:"mediaType=application/json"`
}

type PublishCatalogToMarketplaceResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
