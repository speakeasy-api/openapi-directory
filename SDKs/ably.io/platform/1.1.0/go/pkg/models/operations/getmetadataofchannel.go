package operations

import (
	"openapi/pkg/models/shared"
)

type GetMetadataOfChannelPathParams struct {
	ChannelID string `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetMetadataOfChannelQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetMetadataOfChannelHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetMetadataOfChannelRequest struct {
	PathParams  GetMetadataOfChannelPathParams
	QueryParams GetMetadataOfChannelQueryParams
	Headers     GetMetadataOfChannelHeaders
}

type GetMetadataOfChannelResponse struct {
	Body           []byte
	ChannelDetails *shared.ChannelDetails
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
}
