package operations

import (
	"openapi/pkg/models/shared"
)

type GetEmailListByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetEmailListByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetEmailListByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetEmailListByIDRequest struct {
	PathParams  GetEmailListByIDPathParams
	QueryParams GetEmailListByIDQueryParams
	Headers     GetEmailListByIDHeaders
}

type GetEmailListByIDResponse struct {
	ContentType       string
	EmailListResponse *shared.EmailListResponse
	StatusCode        int64
}
