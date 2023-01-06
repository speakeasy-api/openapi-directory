package operations

import (
	"openapi/pkg/models/shared"
)

type GetBalanceAccountsIDPaymentInstrumentsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBalanceAccountsIDPaymentInstrumentsQueryParams struct {
	Limit  *int32 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
}

type GetBalanceAccountsIDPaymentInstrumentsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetBalanceAccountsIDPaymentInstrumentsRequest struct {
	PathParams  GetBalanceAccountsIDPaymentInstrumentsPathParams
	QueryParams GetBalanceAccountsIDPaymentInstrumentsQueryParams
	Security    GetBalanceAccountsIDPaymentInstrumentsSecurity
}

type GetBalanceAccountsIDPaymentInstrumentsResponse struct {
	ContentType                         string
	PaginatedPaymentInstrumentsResponse *interface{}
	RestServiceError                    *interface{}
	StatusCode                          int64
}
