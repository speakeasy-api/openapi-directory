package shared

type PaymentStatusEnum string

const (
	PaymentStatusEnumExpired       PaymentStatusEnum = "expired"
	PaymentStatusEnumNone          PaymentStatusEnum = "none"
	PaymentStatusEnumOutstanding   PaymentStatusEnum = "outstanding"
	PaymentStatusEnumPaid          PaymentStatusEnum = "paid"
	PaymentStatusEnumPartiallyPaid PaymentStatusEnum = "partially_paid"
)
