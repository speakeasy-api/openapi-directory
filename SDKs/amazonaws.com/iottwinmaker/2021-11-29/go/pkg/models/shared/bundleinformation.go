// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BundleInformation - Information about the pricing bundle.
type BundleInformation struct {
	BundleNames []string         `json:"bundleNames"`
	PricingTier *PricingTierEnum `json:"pricingTier,omitempty"`
}
