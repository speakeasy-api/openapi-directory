package operations

import (
	"openapi/pkg/models/shared"
)

type GetBalanceAccountsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetBalanceAccountsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetBalanceAccountsIDRequest struct {
	PathParams GetBalanceAccountsIDPathParams
	Security   GetBalanceAccountsIDSecurity
}

type GetBalanceAccountsIDResponse struct {
	BalanceAccount   *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
