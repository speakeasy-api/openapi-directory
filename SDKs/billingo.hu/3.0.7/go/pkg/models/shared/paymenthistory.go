package shared

import (
	"time"
)

type PaymentHistory struct {
	ConversionRate *float32          `json:"conversion_rate,omitempty"`
	Date           time.Time         `json:"date"`
	PaymentMethod  PaymentMethodEnum `json:"payment_method"`
	Price          float32           `json:"price"`
	VoucherNumber  *string           `json:"voucher_number,omitempty"`
}
