package shared

import (
	"time"
)

// PreviousFixPeriodInvoiceProrataInfo
// Describe the prorata info based on your previous invoice
type PreviousFixPeriodInvoiceProrataInfo struct {
	AmountAfterTax              *float64   `json:"amountAfterTax,omitempty"`
	AmountToBePaid              *float64   `json:"amountToBePaid,omitempty"`
	ComputedProrataToBeDeducted *float64   `json:"computedProrataToBeDeducted,omitempty"`
	ContractID                  *string    `json:"contractId,omitempty"`
	FixedPeriodEndDate          *time.Time `json:"fixedPeriodEndDate,omitempty"`
	FixedPeriodStartDate        *time.Time `json:"fixedPeriodStartDate,omitempty"`
	InvoiceNumber               *string    `json:"invoiceNumber,omitempty"`
}
