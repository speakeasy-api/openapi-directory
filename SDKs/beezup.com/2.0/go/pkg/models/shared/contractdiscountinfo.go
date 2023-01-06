package shared

// ContractDiscountInfo
// Describe the discount information related to the offer.
type ContractDiscountInfo struct {
	AmountCodePromoDiscount             *float64                     `json:"amountCodePromoDiscount,omitempty"`
	AmountCodePromoDiscountPerMonth     *float64                     `json:"amountCodePromoDiscountPerMonth,omitempty"`
	CouponDiscountCode                  *string                      `json:"couponDiscountCode,omitempty"`
	CouponDiscountID                    *int32                       `json:"couponDiscountId,omitempty"`
	CustomerHasActualDiscount           *bool                        `json:"customerHasActualDiscount,omitempty"`
	DiscountDurationInMonth             *int32                       `json:"discountDurationInMonth,omitempty"`
	IsCouponDiscountLinkedToCouponOffer *bool                        `json:"isCouponDiscountLinkedToCouponOffer,omitempty"`
	PercentDiscount                     *float64                     `json:"percentDiscount,omitempty"`
	PromotionalCodeValidity             *PromotionalCodeValidityEnum `json:"promotionalCodeValidity,omitempty"`
}
