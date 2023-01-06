package operations

import (
	"openapi/pkg/models/shared"
)

type PatchPaymentInstrumentsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchPaymentInstrumentsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchPaymentInstrumentsIDRequest struct {
	PathParams PatchPaymentInstrumentsIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchPaymentInstrumentsIDSecurity
}

type PatchPaymentInstrumentsIDResponse struct {
	ContentType       string
	PaymentInstrument *interface{}
	RestServiceError  *interface{}
	StatusCode        int64
}
