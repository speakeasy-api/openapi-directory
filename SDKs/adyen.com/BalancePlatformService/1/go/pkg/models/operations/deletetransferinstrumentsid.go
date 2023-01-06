package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransferInstrumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTransferInstrumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteTransferInstrumentsIDRequest struct {
	PathParams DeleteTransferInstrumentsIDPathParams
	Security   DeleteTransferInstrumentsIDSecurity
}

type DeleteTransferInstrumentsIDResponse struct {
	ContentType  string
	ServiceError *interface{}
	StatusCode   int64
	VoidResponse *interface{}
}
