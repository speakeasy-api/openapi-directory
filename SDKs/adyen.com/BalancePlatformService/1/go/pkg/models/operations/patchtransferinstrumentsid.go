package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTransferInstrumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchTransferInstrumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchTransferInstrumentsIDRequest struct {
	PathParams PatchTransferInstrumentsIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchTransferInstrumentsIDSecurity
}

type PatchTransferInstrumentsIDResponse struct {
	ContentType        string
	ServiceError       *interface{}
	StatusCode         int64
	TransferInstrument *interface{}
}
