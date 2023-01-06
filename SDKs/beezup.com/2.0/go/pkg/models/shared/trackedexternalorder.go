package shared

import (
	"time"
)

type TrackedExternalOrder struct {
	CurrencyCode     string                        `json:"currencyCode"`
	MerchantOrderID  string                        `json:"merchantOrderId"`
	PaymentValidated bool                          `json:"paymentValidated"`
	Products         []TrackedExternalOrderProduct `json:"products,omitempty"`
	TotalAmount      float64                       `json:"totalAmount"`
	UtcDate          time.Time                     `json:"utcDate"`
	VisitorID        *string                       `json:"visitorId,omitempty"`
}
