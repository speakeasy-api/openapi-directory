package shared

import (
	"time"
)

type TrackedOrder struct {
	Channel          BeezUpCommonChannelBasicInfo `json:"channel"`
	CurrencyCode     string                       `json:"currencyCode"`
	MerchantOrderID  string                       `json:"merchantOrderId"`
	PaymentValidated bool                         `json:"paymentValidated"`
	Products         []TrackedOrderProduct        `json:"products"`
	TotalAmount      float64                      `json:"totalAmount"`
	UtcDate          time.Time                    `json:"utcDate"`
}
