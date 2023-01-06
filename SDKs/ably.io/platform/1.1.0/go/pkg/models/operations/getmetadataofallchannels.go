package operations

import (
	"openapi/pkg/models/shared"
)

type GetMetadataOfAllChannelsByEnum string

const (
	GetMetadataOfAllChannelsByEnumValue GetMetadataOfAllChannelsByEnum = "value"
	GetMetadataOfAllChannelsByEnumID    GetMetadataOfAllChannelsByEnum = "id"
)

type GetMetadataOfAllChannelsQueryParams struct {
	By     *GetMetadataOfAllChannelsByEnum `queryParam:"style=form,explode=true,name=by"`
	Format *shared.ResponseFormatEnum      `queryParam:"style=form,explode=true,name=format"`
	Limit  *int64                          `queryParam:"style=form,explode=true,name=limit"`
	Prefix *string                         `queryParam:"style=form,explode=true,name=prefix"`
}

type GetMetadataOfAllChannelsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetMetadataOfAllChannelsRequest struct {
	QueryParams GetMetadataOfAllChannelsQueryParams
	Headers     GetMetadataOfAllChannelsHeaders
}

type GetMetadataOfAllChannelsResponse struct {
	Body                                            []byte
	ContentType                                     string
	Error                                           *shared.Error
	Headers                                         map[string][]string
	StatusCode                                      int64
	GetMetadataOfAllChannels2XXApplicationJSONOneOf *interface{}
	GetMetadataOfAllChannels2XXTextHTMLString       *string
}
