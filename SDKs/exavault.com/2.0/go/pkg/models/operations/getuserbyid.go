package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUserByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetUserByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetUserByIDRequest struct {
	PathParams  GetUserByIDPathParams
	QueryParams GetUserByIDQueryParams
	Headers     GetUserByIDHeaders
}

type GetUserByIDResponse struct {
	ContentType  string
	StatusCode   int64
	UserResponse *shared.UserResponse
}
