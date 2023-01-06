package shared

type OfferRequest struct {
	BillingPeriodInMonth int32   `json:"billingPeriodInMonth"`
	CouponDiscountCode   *string `json:"couponDiscountCode,omitempty"`
	CouponOfferCode      *string `json:"couponOfferCode,omitempty"`
	OfferID              int32   `json:"offerId"`
	StoreCount           int32   `json:"storeCount"`
}
