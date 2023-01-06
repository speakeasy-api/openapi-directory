package shared

type CashPaymentLogActionEnum string

const (
	CashPaymentLogActionEnumC CashPaymentLogActionEnum = "C"
	CashPaymentLogActionEnumU CashPaymentLogActionEnum = "U"
	CashPaymentLogActionEnumD CashPaymentLogActionEnum = "D"
	CashPaymentLogActionEnumF CashPaymentLogActionEnum = "F"
	CashPaymentLogActionEnumA CashPaymentLogActionEnum = "A"
)

type CashPaymentLogPaymentMethodEnum string

const (
	CashPaymentLogPaymentMethodEnumCash CashPaymentLogPaymentMethodEnum = "CASH"
	CashPaymentLogPaymentMethodEnumChck CashPaymentLogPaymentMethodEnum = "CHCK"
	CashPaymentLogPaymentMethodEnumDbit CashPaymentLogPaymentMethodEnum = "DBIT"
	CashPaymentLogPaymentMethodEnumCrdt CashPaymentLogPaymentMethodEnum = "CRDT"
	CashPaymentLogPaymentMethodEnumAmex CashPaymentLogPaymentMethodEnum = "AMEX"
	CashPaymentLogPaymentMethodEnumVisa CashPaymentLogPaymentMethodEnum = "VISA"
	CashPaymentLogPaymentMethodEnumMstr CashPaymentLogPaymentMethodEnum = "MSTR"
	CashPaymentLogPaymentMethodEnumDisc CashPaymentLogPaymentMethodEnum = "DISC"
	CashPaymentLogPaymentMethodEnumSqr1 CashPaymentLogPaymentMethodEnum = "SQR1"
	CashPaymentLogPaymentMethodEnumSqre CashPaymentLogPaymentMethodEnum = "SQRE"
	CashPaymentLogPaymentMethodEnumPtpa CashPaymentLogPaymentMethodEnum = "PTPA"
	CashPaymentLogPaymentMethodEnumOnpt CashPaymentLogPaymentMethodEnum = "ONPT"
	CashPaymentLogPaymentMethodEnumOthr CashPaymentLogPaymentMethodEnum = "OTHR"
)

type CashPaymentLog struct {
	Action        *CashPaymentLogActionEnum        `json:"action,omitempty"`
	Amount        *float64                         `json:"amount,omitempty"`
	Appointment   *string                          `json:"appointment,omitempty"`
	CreatedBy     *string                          `json:"created_by,omitempty"`
	Doctor        *string                          `json:"doctor,omitempty"`
	ID            *int64                           `json:"id,omitempty"`
	Patient       *string                          `json:"patient,omitempty"`
	PaymentMethod *CashPaymentLogPaymentMethodEnum `json:"payment_method,omitempty"`
	Source        *string                          `json:"source,omitempty"`
	UpdatedAt     *string                          `json:"updated_at,omitempty"`
}
