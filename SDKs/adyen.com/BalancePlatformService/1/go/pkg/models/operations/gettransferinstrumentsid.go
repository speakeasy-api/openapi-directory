package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransferInstrumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetTransferInstrumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransferInstrumentsIDRequest struct {
	PathParams GetTransferInstrumentsIDPathParams
	Security   GetTransferInstrumentsIDSecurity
}

type GetTransferInstrumentsIDResponse struct {
	ContentType        string
	ServiceError       *interface{}
	StatusCode         int64
	TransferInstrument *interface{}
}
