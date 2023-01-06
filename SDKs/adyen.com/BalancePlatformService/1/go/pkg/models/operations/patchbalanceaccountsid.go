package operations

import (
	"openapi/pkg/models/shared"
)

type PatchBalanceAccountsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchBalanceAccountsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchBalanceAccountsIDRequest struct {
	PathParams PatchBalanceAccountsIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchBalanceAccountsIDSecurity
}

type PatchBalanceAccountsIDResponse struct {
	BalanceAccount   *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
