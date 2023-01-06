package shared

type EobObjectPaymentMethodEnum string

const (
	EOBObjectPaymentMethodEnumUnknown EobObjectPaymentMethodEnum = ""
	EOBObjectPaymentMethodEnumAch     EobObjectPaymentMethodEnum = "ACH"
	EOBObjectPaymentMethodEnumBopccp  EobObjectPaymentMethodEnum = "BOPCCP"
	EOBObjectPaymentMethodEnumBopctx  EobObjectPaymentMethodEnum = "BOPCTX"
	EOBObjectPaymentMethodEnumChk     EobObjectPaymentMethodEnum = "CHK"
	EOBObjectPaymentMethodEnumFwt     EobObjectPaymentMethodEnum = "FWT"
	EOBObjectPaymentMethodEnumVpay    EobObjectPaymentMethodEnum = "VPAY"
	EOBObjectPaymentMethodEnumNon     EobObjectPaymentMethodEnum = "NON"
)

type EobObject struct {
	CheckDate                 *string                     `json:"check_date,omitempty"`
	DepositDate               *string                     `json:"deposit_date,omitempty"`
	Doctor                    int64                       `json:"doctor"`
	ID                        *int64                      `json:"id,omitempty"`
	InsurancePayerID          string                      `json:"insurance_payer_id"`
	InsurancePayerName        string                      `json:"insurance_payer_name"`
	InsurancePayerTraceNumber string                      `json:"insurance_payer_trace_number"`
	PaymentMethod             *EobObjectPaymentMethodEnum `json:"payment_method,omitempty"`
	PostedDate                *string                     `json:"posted_date,omitempty"`
	ScannedEob                *string                     `json:"scanned_eob,omitempty"`
	TotalPaid                 *float64                    `json:"total_paid,omitempty"`
	UpdatedAt                 *string                     `json:"updated_at,omitempty"`
}
