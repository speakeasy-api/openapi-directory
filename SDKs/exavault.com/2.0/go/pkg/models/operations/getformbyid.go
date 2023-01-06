package operations

import (
	"openapi/pkg/models/shared"
)

type GetFormByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFormByIDQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetFormByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetFormByIDRequest struct {
	PathParams  GetFormByIDPathParams
	QueryParams GetFormByIDQueryParams
	Headers     GetFormByIDHeaders
}

type GetFormByIDResponse struct {
	ContentType  string
	FormResponse *shared.FormResponse
	StatusCode   int64
}
