package shared

// ContractBillingPeriodInfo
// Describe the billing period information related to the offer.
type ContractBillingPeriodInfo struct {
	AmountBillingPeriodDiscount  *float64 `json:"amountBillingPeriodDiscount,omitempty"`
	BillingPeriodInMonth         *int32   `json:"billingPeriodInMonth,omitempty"`
	BillingPeriodPercentDiscount *float64 `json:"billingPeriodPercentDiscount,omitempty"`
}
