package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInstrumentGroupsIDTransactionRulesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPaymentInstrumentGroupsIDTransactionRulesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetPaymentInstrumentGroupsIDTransactionRulesRequest struct {
	PathParams GetPaymentInstrumentGroupsIDTransactionRulesPathParams
	Security   GetPaymentInstrumentGroupsIDTransactionRulesSecurity
}

type GetPaymentInstrumentGroupsIDTransactionRulesResponse struct {
	ContentType              string
	RestServiceError         *interface{}
	StatusCode               int64
	TransactionRulesResponse *interface{}
}
