package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmailListsQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetEmailListsHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetEmailListsRequest struct {
	QueryParams GetEmailListsQueryParams
	Headers     GetEmailListsHeaders
}

type GetEmailListsResponse struct {
	ContentType                 string
	EmailListCollectionResponse *shared.EmailListCollectionResponse
	StatusCode                  int64
}
