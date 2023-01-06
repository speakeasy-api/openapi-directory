package operations

import (
	"openapi/pkg/models/shared"
)

type PostDocumentsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostDocumentsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostDocumentsSecurity
}

type PostDocumentsResponse struct {
	ContentType  string
	Document     *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
