package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInstrumentsIDTransactionRulesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPaymentInstrumentsIDTransactionRulesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetPaymentInstrumentsIDTransactionRulesRequest struct {
	PathParams GetPaymentInstrumentsIDTransactionRulesPathParams
	Security   GetPaymentInstrumentsIDTransactionRulesSecurity
}

type GetPaymentInstrumentsIDTransactionRulesResponse struct {
	ContentType              string
	RestServiceError         *interface{}
	StatusCode               int64
	TransactionRulesResponse *interface{}
}
