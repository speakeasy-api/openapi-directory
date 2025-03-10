// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LinkedSupplierInput - The supplier this entity is linked to.
type LinkedSupplierInput struct {
	Address *Address `json:"address,omitempty"`
	// The display name of the supplier.
	DisplayName *string `json:"display_name,omitempty"`
	// The ID of the supplier this entity is linked to.
	ID string `json:"id"`
}

// LinkedSupplier - The supplier this entity is linked to.
type LinkedSupplier struct {
	Address *Address `json:"address,omitempty"`
	// The company name of the supplier.
	CompanyName *string `json:"company_name,omitempty"`
	// The display name of the supplier.
	DisplayName *string `json:"display_name,omitempty"`
	// The ID of the supplier this entity is linked to.
	ID string `json:"id"`
}
