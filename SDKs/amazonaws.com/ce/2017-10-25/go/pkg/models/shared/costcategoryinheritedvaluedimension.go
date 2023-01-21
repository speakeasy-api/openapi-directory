package shared

// CostCategoryInheritedValueDimension
// When creating or updating a cost category, you can define the <code>CostCategoryRule</code> rule type as <code>INHERITED_VALUE</code>. This rule type adds the flexibility of defining a rule that dynamically inherits the cost category value from the dimension value defined by <code>CostCategoryInheritedValueDimension</code>. For example, if you want to dynamically group costs that are based on the value of a specific tag key, first choose an inherited value rule type, then choose the tag dimension and specify the tag key to use.
type CostCategoryInheritedValueDimension struct {
	DimensionKey  *string                                      `json:"DimensionKey,omitempty"`
	DimensionName *CostCategoryInheritedValueDimensionNameEnum `json:"DimensionName,omitempty"`
}
