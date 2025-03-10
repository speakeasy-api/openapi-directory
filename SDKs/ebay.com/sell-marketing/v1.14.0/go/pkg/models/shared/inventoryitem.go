// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// InventoryItem - This type defines the fields for the seller inventory reference IDs (also known as an "SKU" or "custom label").
type InventoryItem struct {
	// The seller's inventory reference ID for a listing. Also known as the "SKU" or "custom label," an inventory reference ID is either the ID of the listing or, if the listing has variations (such as a shirt that's available in multiple sizes and colors), the ID of the parent listing.
	InventoryReferenceID *string `json:"inventoryReferenceId,omitempty"`
}
