package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInstrumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPaymentInstrumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetPaymentInstrumentsIDRequest struct {
	PathParams GetPaymentInstrumentsIDPathParams
	Security   GetPaymentInstrumentsIDSecurity
}

type GetPaymentInstrumentsIDResponse struct {
	ContentType       string
	PaymentInstrument *interface{}
	RestServiceError  *interface{}
	StatusCode        int64
}
