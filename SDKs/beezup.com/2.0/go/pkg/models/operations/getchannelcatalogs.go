package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogsQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetChannelCatalogsRequest struct {
	QueryParams GetChannelCatalogsQueryParams
}

type GetChannelCatalogsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalogList               *shared.ChannelCatalogList
}
