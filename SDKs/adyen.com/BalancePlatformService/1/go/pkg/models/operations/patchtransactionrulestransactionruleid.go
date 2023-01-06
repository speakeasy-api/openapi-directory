package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTransactionRulesTransactionRuleIDPathParams struct {
	TransactionRuleID string `pathParam:"style=simple,explode=false,name=transactionRuleId"`
}

type PatchTransactionRulesTransactionRuleIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PatchTransactionRulesTransactionRuleIDRequest struct {
	PathParams PatchTransactionRulesTransactionRuleIDPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   PatchTransactionRulesTransactionRuleIDSecurity
}

type PatchTransactionRulesTransactionRuleIDResponse struct {
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
	TransactionRule  *interface{}
}
