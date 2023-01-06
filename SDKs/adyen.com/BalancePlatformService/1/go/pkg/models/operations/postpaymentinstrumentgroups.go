package operations

import (
	"openapi/pkg/models/shared"
)

type PostPaymentInstrumentGroupsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostPaymentInstrumentGroupsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostPaymentInstrumentGroupsSecurity
}

type PostPaymentInstrumentGroupsResponse struct {
	ContentType            string
	PaymentInstrumentGroup *interface{}
	RestServiceError       *interface{}
	StatusCode             int64
}
