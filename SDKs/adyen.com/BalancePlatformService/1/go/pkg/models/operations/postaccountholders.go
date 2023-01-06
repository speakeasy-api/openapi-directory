package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountHoldersSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostAccountHoldersRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostAccountHoldersSecurity
}

type PostAccountHoldersResponse struct {
	AccountHolder    *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
