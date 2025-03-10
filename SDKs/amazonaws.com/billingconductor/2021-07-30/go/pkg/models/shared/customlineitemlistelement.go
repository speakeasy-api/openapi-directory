// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CustomLineItemListElement -  A representation of a custom line item.
type CustomLineItemListElement struct {
	Arn              *string                          `json:"Arn,omitempty"`
	AssociationSize  *int64                           `json:"AssociationSize,omitempty"`
	BillingGroupArn  *string                          `json:"BillingGroupArn,omitempty"`
	ChargeDetails    *ListCustomLineItemChargeDetails `json:"ChargeDetails,omitempty"`
	CreationTime     *int64                           `json:"CreationTime,omitempty"`
	CurrencyCode     *CurrencyCodeEnum                `json:"CurrencyCode,omitempty"`
	Description      *string                          `json:"Description,omitempty"`
	LastModifiedTime *int64                           `json:"LastModifiedTime,omitempty"`
	Name             *string                          `json:"Name,omitempty"`
	ProductCode      *string                          `json:"ProductCode,omitempty"`
}
