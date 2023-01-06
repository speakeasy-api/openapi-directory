package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogCostSettingsPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ConfigureChannelCatalogCostSettingsRequest struct {
	PathParams ConfigureChannelCatalogCostSettingsPathParams
	Request    shared.CostSettings `request:"mediaType=application/json"`
}

type ConfigureChannelCatalogCostSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
