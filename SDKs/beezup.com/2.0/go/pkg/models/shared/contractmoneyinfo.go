package shared

// ContractMoneyInfo
// Describe the pricing information related to the offer.
type ContractMoneyInfo struct {
	AmountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount *float64 `json:"amountExcludingTaxesAndExcludingCodePromoDiscountIncludingBillingPeriodDiscount,omitempty"`
	AmountExcludingTaxesAndExcludingDiscounts                                       *float64 `json:"amountExcludingTaxesAndExcludingDiscounts,omitempty"`
	AmountExcludingTaxesIncludingDiscounts                                          *float64 `json:"amountExcludingTaxesIncludingDiscounts,omitempty"`
	AmountExcludingTaxesIncludingDiscountsPerMonth                                  *float64 `json:"amountExcludingTaxesIncludingDiscountsPerMonth,omitempty"`
	AmountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount             *float64 `json:"amountIncludingTaxesExcludingDiscountIncludingBillingPeriodDiscount,omitempty"`
	AmountIncludingTaxesIncludingDiscounts                                          *float64 `json:"amountIncludingTaxesIncludingDiscounts,omitempty"`
	AmountTaxesExcludingDiscountIncludingBillingPeriodDiscount                      *float64 `json:"amountTaxesExcludingDiscountIncludingBillingPeriodDiscount,omitempty"`
	AmountTaxesIncludingDiscounts                                                   *float64 `json:"amountTaxesIncludingDiscounts,omitempty"`
	CurrencyCode                                                                    *string  `json:"currencyCode,omitempty"`
	InitialOfferFixedPrice                                                          *float64 `json:"initialOfferFixedPrice,omitempty"`
	VatPercent                                                                      *float64 `json:"vatPercent,omitempty"`
}
