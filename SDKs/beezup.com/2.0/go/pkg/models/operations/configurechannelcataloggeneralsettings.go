package operations

import (
	"openapi/pkg/models/shared"
)

type ConfigureChannelCatalogGeneralSettingsPathParams struct {
	ChannelCatalogID string `pathParam:"style=simple,explode=false,name=channelCatalogId"`
}

type ConfigureChannelCatalogGeneralSettingsRequest struct {
	PathParams ConfigureChannelCatalogGeneralSettingsPathParams
	Request    shared.GeneralSettings `request:"mediaType=application/json"`
}

type ConfigureChannelCatalogGeneralSettingsResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
