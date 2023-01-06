package shared

import (
	"time"
)

// Document
// Document object representing your invoice.
type Document struct {
	BlockID            *int64                          `json:"block_id,omitempty"`
	Cancelled          *bool                           `json:"cancelled,omitempty"`
	Comment            *string                         `json:"comment,omitempty"`
	ConversionRate     *float32                        `json:"conversion_rate,omitempty"`
	Currency           *CurrencyEnum                   `json:"currency,omitempty"`
	DueDate            *time.Time                      `json:"due_date,omitempty"`
	Electronic         *bool                           `json:"electronic,omitempty"`
	FulfillmentDate    *time.Time                      `json:"fulfillment_date,omitempty"`
	GrossTotal         *float32                        `json:"gross_total,omitempty"`
	ID                 *int64                          `json:"id,omitempty"`
	InvoiceDate        *time.Time                      `json:"invoice_date,omitempty"`
	InvoiceNumber      *string                         `json:"invoice_number,omitempty"`
	Items              []DocumentItem                  `json:"items,omitempty"`
	Language           *DocumentLanguageEnum           `json:"language,omitempty"`
	NotificationStatus *DocumentNotificationStatusEnum `json:"notification_status,omitempty"`
	Organization       *DocumentOrganization           `json:"organization,omitempty"`
	PaidDate           *time.Time                      `json:"paid_date,omitempty"`
	Partner            *Partner                        `json:"partner,omitempty"`
	PaymentMethod      *PaymentMethodEnum              `json:"payment_method,omitempty"`
	PaymentStatus      *PaymentStatusEnum              `json:"payment_status,omitempty"`
	Settings           *DocumentSettings               `json:"settings,omitempty"`
	Summary            *DocumentSummary                `json:"summary,omitempty"`
	Tags               []string                        `json:"tags,omitempty"`
	Type               *DocumentTypeEnum               `json:"type,omitempty"`
}
