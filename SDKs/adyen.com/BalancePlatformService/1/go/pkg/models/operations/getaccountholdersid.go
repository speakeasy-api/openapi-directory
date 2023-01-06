package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountHoldersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetAccountHoldersIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountHoldersIDRequest struct {
	PathParams GetAccountHoldersIDPathParams
	Security   GetAccountHoldersIDSecurity
}

type GetAccountHoldersIDResponse struct {
	AccountHolder    *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
