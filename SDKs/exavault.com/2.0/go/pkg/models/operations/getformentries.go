package operations

import (
	"openapi/pkg/models/shared"
)

type GetFormEntriesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetFormEntriesQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetFormEntriesHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetFormEntriesRequest struct {
	PathParams  GetFormEntriesPathParams
	QueryParams GetFormEntriesQueryParams
	Headers     GetFormEntriesHeaders
}

type GetFormEntriesResponse struct {
	ContentType       string
	FormEntryResponse *shared.FormEntryResponse
	StatusCode        int64
}
