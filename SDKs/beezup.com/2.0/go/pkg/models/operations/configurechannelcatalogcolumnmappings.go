package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogColumnMappingsPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ConfigureChannelCatalogColumnMappingsRequest struct {
	PathParams ConfigureChannelCatalogColumnMappingsPathParams
	Request    []shared.ChannelCatalogColumnMapping `request:"mediaType=application/json"`
}

type ConfigureChannelCatalogColumnMappingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
