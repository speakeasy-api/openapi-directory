package operations

import (
	"openapi/pkg/models/shared"
)

type GetWehooksListQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
	Limit   *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type GetWehooksListHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetWehooksListRequest struct {
	QueryParams GetWehooksListQueryParams
	Headers     GetWehooksListHeaders
}

type GetWehooksListResponse struct {
	ContentType               string
	StatusCode                int64
	WebhookCollectionResponse *shared.WebhookCollectionResponse
}
