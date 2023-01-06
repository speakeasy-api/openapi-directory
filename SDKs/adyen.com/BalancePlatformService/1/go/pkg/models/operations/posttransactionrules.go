package operations

import (
	"openapi/pkg/models/shared"
)

type PostTransactionRulesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostTransactionRulesRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostTransactionRulesSecurity
}

type PostTransactionRulesResponse struct {
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
	TransactionRule  *interface{}
}
