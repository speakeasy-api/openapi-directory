// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Fee - This type is used to display fees that are automatically deducted from seller payouts.
type Fee struct {
	// This type is used to express the dollar value and currency used for any transaction retrieved with the <strong>Finances API</strong>, including an order total, a seller payout, a buyer refund, or a seller credit.
	Amount *Amount `json:"amount,omitempty"`
	// This container returns jurisdiction information about region-specific fees that are charged to sellers.
	FeeJurisdiction *FeeJurisdiction `json:"feeJurisdiction,omitempty"`
	// A description of the fee that was deducted from the seller payout.
	FeeMemo *string `json:"feeMemo,omitempty"`
	// The enumeration value returned here indicates the type of fee that was deducted from the seller payout. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/finances/types/api:FeeTypeEnum'>eBay API documentation</a>
	FeeType *string `json:"feeType,omitempty"`
}
