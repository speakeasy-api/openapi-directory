// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ProductAdoptionPolicy - This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
type ProductAdoptionPolicy struct {
	// The category ID to which the listing policies apply.
	CategoryID *string `json:"categoryId,omitempty"`
	// A value that indicates the root node of the category tree used for the response set. Each marketplace is based on a category tree whose root node is indicated by this unique category ID value. All category policy information returned by this call pertains to the categories included below this root node of the tree. A category tree is a hierarchical framework of eBay categories that begins at the root node of the tree and extends to include all the child nodes in the tree. Each child node in the tree is an eBay category that is represented by a unique categoryId value. Within a category tree, the root node has no parent node and leaf nodes are nodes that have no child nodes.
	CategoryTreeID *string `json:"categoryTreeId,omitempty"`
	// This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
	Exclusion *Exclusion `json:"exclusion,omitempty"`
	// If set to true, items must include an ePID value in their item description before they can be listed in the category identified by the associated categoryId. In contrast, a value of false indicates that items listed in the associated category do not require ePID values. Important! It is possible for a productAdoptionPolicies container to not contain this productRequired field. This occurs if the eBay category is not part of the PBSE Phase 1 or Phase 2 mandate. In these scenarios, please treat the response the same as if this field were present and contained a value of false.
	ProductRequired *bool `json:"productRequired,omitempty"`
}
