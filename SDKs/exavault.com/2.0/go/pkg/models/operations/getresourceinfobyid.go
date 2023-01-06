package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceInfoByIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourceInfoByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetResourceInfoByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetResourceInfoByIDRequest struct {
	PathParams  GetResourceInfoByIDPathParams
	QueryParams GetResourceInfoByIDQueryParams
	Headers     GetResourceInfoByIDHeaders
}

type GetResourceInfoByIDResponse struct {
	ContentType      string
	ResourceResponse *shared.ResourceResponse
	StatusCode       int64
}
