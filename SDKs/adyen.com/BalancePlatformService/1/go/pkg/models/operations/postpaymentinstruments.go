package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentInstrumentsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostPaymentInstrumentsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostPaymentInstrumentsSecurity
}

type PostPaymentInstrumentsResponse struct {
	ContentType       string
	PaymentInstrument *interface{}
	RestServiceError  *interface{}
	StatusCode        int64
}
