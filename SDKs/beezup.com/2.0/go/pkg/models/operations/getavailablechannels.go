package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableChannelsQueryParams struct {
	StoreID string `queryParam:"style=form,explode=true,name=storeId"`
}

type GetAvailableChannelsRequest struct {
	QueryParams GetAvailableChannelsQueryParams
}

type GetAvailableChannelsResponse struct {
	ContentType    string
	StatusCode     int64
	ChannelHeaders []shared.ChannelHeader
}
