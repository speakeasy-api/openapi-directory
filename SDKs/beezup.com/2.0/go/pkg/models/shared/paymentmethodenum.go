package shared

type PaymentMethodEnum string

const (
	PaymentMethodEnumTransfer      PaymentMethodEnum = "Transfer"
	PaymentMethodEnumDebit         PaymentMethodEnum = "Debit"
	PaymentMethodEnumPaypal        PaymentMethodEnum = "Paypal"
	PaymentMethodEnumCheck         PaymentMethodEnum = "Check"
	PaymentMethodEnumCreditNote    PaymentMethodEnum = "CreditNote"
	PaymentMethodEnumLoss          PaymentMethodEnum = "Loss"
	PaymentMethodEnumOnlinePayment PaymentMethodEnum = "OnlinePayment"
)
