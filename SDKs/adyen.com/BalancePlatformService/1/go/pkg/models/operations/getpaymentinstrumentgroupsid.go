package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInstrumentGroupsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPaymentInstrumentGroupsIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetPaymentInstrumentGroupsIDRequest struct {
	PathParams GetPaymentInstrumentGroupsIDPathParams
	Security   GetPaymentInstrumentGroupsIDSecurity
}

type GetPaymentInstrumentGroupsIDResponse struct {
	ContentType            string
	PaymentInstrumentGroup *interface{}
	RestServiceError       *interface{}
	StatusCode             int64
}
