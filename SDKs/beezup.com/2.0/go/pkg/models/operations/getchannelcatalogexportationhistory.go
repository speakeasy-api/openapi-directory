package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelCatalogExportationHistoryPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type GetChannelCatalogExportationHistoryQueryParams struct {
	PageNumber int32 `queryParam:"style=form,explode=true,name=pageNumber"`
	PageSize   int32 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetChannelCatalogExportationHistoryRequest struct {
	PathParams  GetChannelCatalogExportationHistoryPathParams
	QueryParams GetChannelCatalogExportationHistoryQueryParams
}

type GetChannelCatalogExportationHistoryResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
	ChannelCatalogExportationHistory *shared.ChannelCatalogExportationHistory
}
