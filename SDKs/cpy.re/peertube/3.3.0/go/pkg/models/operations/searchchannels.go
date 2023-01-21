package operations

import (
	"openapi/pkg/models/shared"
)

type SearchChannelsQueryParams struct {
	Count        *int64                   `queryParam:"style=form,explode=true,name=count"`
	Search       string                   `queryParam:"style=form,explode=true,name=search"`
	SearchTarget *shared.SearchTargetEnum `queryParam:"style=form,explode=true,name=searchTarget"`
	Sort         *string                  `queryParam:"style=form,explode=true,name=sort"`
	Start        *int64                   `queryParam:"style=form,explode=true,name=start"`
}

type SearchChannelsRequest struct {
	QueryParams SearchChannelsQueryParams
}

type SearchChannelsResponse struct {
	ContentType      string
	StatusCode       int64
	VideoChannelList *interface{}
}
