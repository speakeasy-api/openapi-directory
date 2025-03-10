// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DuplicateProductValueConfiguration - Describe how you want to manage the duplication of the product value
type DuplicateProductValueConfiguration struct {
	// Indicate how the product sku are compared for the duplication check.
	CompareOptions CompareOptionsEnum `json:"compareOptions"`
	// Indicate the duplicate product sku strategy.
	Strategy DuplicateProductValueStrategyEnum `json:"strategy"`
}
