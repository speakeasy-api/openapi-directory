package operations

import (
	"openapi/pkg/models/shared"
)

type ExportChannelCatalogProductInfoListPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ExportChannelCatalogProductInfoListQueryParams struct {
	Format shared.ExportFormatInQueryGeneralParameterEnum `queryParam:"style=form,explode=true,name=format"`
}

type ExportChannelCatalogProductInfoListRequest struct {
	PathParams  ExportChannelCatalogProductInfoListPathParams
	QueryParams ExportChannelCatalogProductInfoListQueryParams
	Request     shared.GetChannelCatalogProductInfoListRequest `request:"mediaType=application/json"`
}

type ExportChannelCatalogProductInfoListResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	BeezUPCommonLink3                *shared.BeezUpCommonLink3
	ContentType                      string
	Headers                          map[string][]string
	StatusCode                       int64
}
