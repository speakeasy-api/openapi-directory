package shared

type CashPaymentPaymentMethodEnum string

const (
	CashPaymentPaymentMethodEnumCash CashPaymentPaymentMethodEnum = "CASH"
	CashPaymentPaymentMethodEnumChck CashPaymentPaymentMethodEnum = "CHCK"
	CashPaymentPaymentMethodEnumDbit CashPaymentPaymentMethodEnum = "DBIT"
	CashPaymentPaymentMethodEnumCrdt CashPaymentPaymentMethodEnum = "CRDT"
	CashPaymentPaymentMethodEnumAmex CashPaymentPaymentMethodEnum = "AMEX"
	CashPaymentPaymentMethodEnumVisa CashPaymentPaymentMethodEnum = "VISA"
	CashPaymentPaymentMethodEnumMstr CashPaymentPaymentMethodEnum = "MSTR"
	CashPaymentPaymentMethodEnumDisc CashPaymentPaymentMethodEnum = "DISC"
	CashPaymentPaymentMethodEnumSqr1 CashPaymentPaymentMethodEnum = "SQR1"
	CashPaymentPaymentMethodEnumSqre CashPaymentPaymentMethodEnum = "SQRE"
	CashPaymentPaymentMethodEnumPtpa CashPaymentPaymentMethodEnum = "PTPA"
	CashPaymentPaymentMethodEnumOnpt CashPaymentPaymentMethodEnum = "ONPT"
	CashPaymentPaymentMethodEnumOthr CashPaymentPaymentMethodEnum = "OTHR"
)

type CashPaymentPaymentTransactionTypeEnum string

const (
	CashPaymentPaymentTransactionTypeEnumUnknown CashPaymentPaymentTransactionTypeEnum = ""
	CashPaymentPaymentTransactionTypeEnumRef     CashPaymentPaymentTransactionTypeEnum = "REF"
	CashPaymentPaymentTransactionTypeEnumCor     CashPaymentPaymentTransactionTypeEnum = "COR"
	CashPaymentPaymentTransactionTypeEnumCopay   CashPaymentPaymentTransactionTypeEnum = "COPAY"
	CashPaymentPaymentTransactionTypeEnumCoinsr  CashPaymentPaymentTransactionTypeEnum = "COINSR"
	CashPaymentPaymentTransactionTypeEnumOthr    CashPaymentPaymentTransactionTypeEnum = "OTHR"
)

type CashPayment struct {
	Amount                 *float64                               `json:"amount,omitempty"`
	Appointment            *int64                                 `json:"appointment,omitempty"`
	CreatedAt              *string                                `json:"created_at,omitempty"`
	CreatedBy              *string                                `json:"created_by,omitempty"`
	Doctor                 *int64                                 `json:"doctor,omitempty"`
	ID                     *int64                                 `json:"id,omitempty"`
	LineItem               *int64                                 `json:"line_item,omitempty"`
	Notes                  *string                                `json:"notes,omitempty"`
	Patient                int64                                  `json:"patient"`
	PaymentMethod          *CashPaymentPaymentMethodEnum          `json:"payment_method,omitempty"`
	PaymentTransactionType *CashPaymentPaymentTransactionTypeEnum `json:"payment_transaction_type,omitempty"`
	PostedDate             *string                                `json:"posted_date,omitempty"`
	ReceivedDate           *string                                `json:"received_date,omitempty"`
	TraceNumber            *string                                `json:"trace_number,omitempty"`
	UpdatedAt              *string                                `json:"updated_at,omitempty"`
}
