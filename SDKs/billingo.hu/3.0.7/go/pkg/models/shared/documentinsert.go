package shared

import (
	"time"
)

type DocumentInsert struct {
	BankAccountID   *int64                 `json:"bank_account_id,omitempty"`
	BlockID         int64                  `json:"block_id"`
	Comment         *string                `json:"comment,omitempty"`
	ConversionRate  *float32               `json:"conversion_rate,omitempty"`
	Currency        CurrencyEnum           `json:"currency"`
	DueDate         time.Time              `json:"due_date"`
	Electronic      *bool                  `json:"electronic,omitempty"`
	FulfillmentDate time.Time              `json:"fulfillment_date"`
	Items           []interface{}          `json:"items,omitempty"`
	Language        DocumentLanguageEnum   `json:"language"`
	Paid            *bool                  `json:"paid,omitempty"`
	PartnerID       int64                  `json:"partner_id"`
	PaymentMethod   PaymentMethodEnum      `json:"payment_method"`
	Settings        *DocumentSettings      `json:"settings,omitempty"`
	Type            DocumentInsertTypeEnum `json:"type"`
	VendorID        *string                `json:"vendor_id,omitempty"`
}
