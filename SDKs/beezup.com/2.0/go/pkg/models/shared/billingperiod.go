package shared

type BillingPeriod struct {
	BillingPeriodInMonth int32   `json:"billingPeriodInMonth"`
	DiscountPercentage   float64 `json:"discountPercentage"`
}
