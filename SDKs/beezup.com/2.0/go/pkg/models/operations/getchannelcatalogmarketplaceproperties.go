package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogMarketplacePropertiesPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogMarketplacePropertiesQueryParams struct {
	RedirectionPageURL string `queryParam:"style=form,explode=true,name=redirectionPageUrl"`
}

type GetChannelCatalogMarketplacePropertiesHeaders struct {
	AcceptLanguage []string `header:"style=simple,explode=false,name=Accept-Language"`
}

type GetChannelCatalogMarketplacePropertiesRequest struct {
	PathParams  GetChannelCatalogMarketplacePropertiesPathParams
	QueryParams GetChannelCatalogMarketplacePropertiesQueryParams
	Headers     GetChannelCatalogMarketplacePropertiesHeaders
}

type GetChannelCatalogMarketplacePropertiesResponse struct {
	BeezUPCommonErrorResponseMessage    *shared.BeezUpCommonErrorResponseMessage
	ContentType                         string
	Headers                             map[string][]string
	StatusCode                          int64
	ChannelCatalogMarketplaceProperties *shared.ChannelCatalogMarketplaceProperties
}
