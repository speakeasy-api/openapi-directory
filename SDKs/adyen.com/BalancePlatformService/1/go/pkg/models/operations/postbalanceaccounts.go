package operations

import (
	"openapi/pkg/models/shared"
)

type PostBalanceAccountsSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostBalanceAccountsRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostBalanceAccountsSecurity
}

type PostBalanceAccountsResponse struct {
	BalanceAccount   *interface{}
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
}
