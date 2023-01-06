package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionRulesTransactionRuleIDPathParams struct {
	TransactionRuleID string `pathParam:"style=simple,explode=false,name=transactionRuleId"`
}

type GetTransactionRulesTransactionRuleIDSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetTransactionRulesTransactionRuleIDRequest struct {
	PathParams GetTransactionRulesTransactionRuleIDPathParams
	Security   GetTransactionRulesTransactionRuleIDSecurity
}

type GetTransactionRulesTransactionRuleIDResponse struct {
	ContentType             string
	RestServiceError        *interface{}
	StatusCode              int64
	TransactionRuleResponse *interface{}
}
