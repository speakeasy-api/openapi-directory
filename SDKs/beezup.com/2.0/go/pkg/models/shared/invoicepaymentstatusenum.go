package shared

type InvoicePaymentStatusEnum string

const (
	InvoicePaymentStatusEnumPaid          InvoicePaymentStatusEnum = "Paid"
	InvoicePaymentStatusEnumNotPaid       InvoicePaymentStatusEnum = "NotPaid"
	InvoicePaymentStatusEnumPartiallyPaid InvoicePaymentStatusEnum = "PartiallyPaid"
	InvoicePaymentStatusEnumLoss          InvoicePaymentStatusEnum = "Loss"
)
