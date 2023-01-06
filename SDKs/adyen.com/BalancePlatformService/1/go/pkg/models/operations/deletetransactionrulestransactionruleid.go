package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransactionRulesTransactionRuleIDPathParams struct {
	TransactionRuleID string `pathParam:"style=simple,explode=false,name=transactionRuleId"`
}

type DeleteTransactionRulesTransactionRuleIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteTransactionRulesTransactionRuleIDRequest struct {
	PathParams DeleteTransactionRulesTransactionRuleIDPathParams
	Security   DeleteTransactionRulesTransactionRuleIDSecurity
}

type DeleteTransactionRulesTransactionRuleIDResponse struct {
	ContentType      string
	RestServiceError *interface{}
	StatusCode       int64
	TransactionRule  *interface{}
}
