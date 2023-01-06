package operations

import (
	"openapi/pkg/models/shared"
)

type GetLegacyTrackingChannelCatalogsQueryParams struct {
	StoreID *string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetLegacyTrackingChannelCatalogsRequest struct {
	QueryParams GetLegacyTrackingChannelCatalogsQueryParams
}

type GetLegacyTrackingChannelCatalogsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	LegacyTrackingChannelCatalogList *shared.LegacyTrackingChannelCatalogList
}
