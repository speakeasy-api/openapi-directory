package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelsWithPushSubscribersQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
}

type GetChannelsWithPushSubscribersHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetChannelsWithPushSubscribersRequest struct {
	QueryParams GetChannelsWithPushSubscribersQueryParams
	Headers     GetChannelsWithPushSubscribersHeaders
}

type GetChannelsWithPushSubscribersResponse struct {
	Body                                                    []byte
	ContentType                                             string
	Error                                                   *shared.Error
	StatusCode                                              int64
	GetChannelsWithPushSubscribers2XXApplicationJSONStrings []string
}
