package operations

import (
	"openapi/pkg/models/shared"
)

type OptimiseByChannelPathParams struct {
	ActionName shared.OptimisationActionNameGeneralParametersEnum `pathParam:"style=simple,explode=false,name=actionName"`
	ChannelID  string                                             `pathParam:"style=simple,explode=false,name=channelId"`
	StoreID    string                                             `pathParam:"style=simple,explode=false,name=storeId"`
}

type OptimiseByChannelRequest struct {
	PathParams OptimiseByChannelPathParams
}

type OptimiseByChannelResponse struct {
	BeezUPCommonErrorResponseMessage *shared.BeezUpCommonErrorResponseMessage
	ContentType                      string
	StatusCode                       int64
}
