package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransferInstrumentsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostTransferInstrumentsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostTransferInstrumentsSecurity
}

type PostTransferInstrumentsResponse struct {
	ContentType        string
	ServiceError       *interface{}
	StatusCode         int64
	TransferInstrument *interface{}
}
