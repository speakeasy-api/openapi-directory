package shared

type OnlinePaymentEnum string

const (
	OnlinePaymentEnumUnknown   OnlinePaymentEnum = ""
	OnlinePaymentEnumBarion    OnlinePaymentEnum = "Barion"
	OnlinePaymentEnumSimplePay OnlinePaymentEnum = "SimplePay"
	OnlinePaymentEnumNo        OnlinePaymentEnum = "no"
)
