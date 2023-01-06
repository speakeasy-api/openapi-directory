package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountHoldersIDBalanceAccountsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAccountHoldersIDBalanceAccountsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetAccountHoldersIDBalanceAccountsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountHoldersIDBalanceAccountsRequest struct {
	PathParams  GetAccountHoldersIDBalanceAccountsPathParams
	QueryParams GetAccountHoldersIDBalanceAccountsQueryParams
	Security    GetAccountHoldersIDBalanceAccountsSecurity
}

type GetAccountHoldersIDBalanceAccountsResponse struct {
	ContentType                      string
	PaginatedBalanceAccountsResponse *interface{}
	RestServiceError                 *interface{}
	StatusCode                       int64
}
