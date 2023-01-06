package operations

import (
	"openapi/pkg/models/shared"
)

type GetShareByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetShareByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetShareByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetShareByIDRequest struct {
	PathParams  GetShareByIDPathParams
	QueryParams GetShareByIDQueryParams
	Headers     GetShareByIDHeaders
}

type GetShareByIDResponse struct {
	ContentType   string
	ShareResponse *shared.ShareResponse
	StatusCode    int64
}
