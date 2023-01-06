package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountQueryParams struct {
	Include *string `queryParam:"style=form,explode=true,name=include"`
}

type GetAccountHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetAccountRequest struct {
	QueryParams GetAccountQueryParams
	Headers     GetAccountHeaders
}

type GetAccountResponse struct {
	AccountResponse *shared.AccountResponse
	ContentType     string
	StatusCode      int64
}
