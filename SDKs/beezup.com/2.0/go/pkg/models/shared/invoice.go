package shared

import (
	"time"
)

type Invoice struct {
	Amount         float64                  `json:"amount"`
	AmountToBePaid float64                  `json:"amountToBePaid"`
	ContractID     string                   `json:"contractId"`
	CurrencyCode   string                   `json:"currencyCode"`
	DueDate        time.Time                `json:"dueDate"`
	InvoiceDate    time.Time                `json:"invoiceDate"`
	InvoiceNumber  string                   `json:"invoiceNumber"`
	InvoiceURL     *string                  `json:"invoiceUrl,omitempty"`
	PaymentStatus  InvoicePaymentStatusEnum `json:"paymentStatus"`
}
