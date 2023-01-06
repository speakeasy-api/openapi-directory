package operations

import (
	"openapi/pkg/models/shared"
)

type PatchAccountHoldersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchAccountHoldersIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchAccountHoldersIDRequest struct {
	PathParams PatchAccountHoldersIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchAccountHoldersIDSecurity
}

type PatchAccountHoldersIDResponse struct {
	AccountHolder    *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
