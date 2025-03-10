// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// EbayFulfillmentProgram - This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
type EbayFulfillmentProgram struct {
	// The value returned in this field indicates the party that is handling fulfillment of the order line item. Valid value: EBAY
	FulfilledBy *string `json:"fulfilledBy,omitempty"`
}
