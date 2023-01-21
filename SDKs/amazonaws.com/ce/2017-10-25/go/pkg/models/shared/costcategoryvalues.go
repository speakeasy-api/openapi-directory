package shared

// CostCategoryValues
// <p>The Cost Categories values used for filtering the costs.</p> <p>If <code>Values</code> and <code>Key</code> are not specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to all Cost Categories. That is, it filters on resources that aren't mapped to any Cost Categories.</p> <p>If <code>Values</code> is provided and <code>Key</code> isn't specified, the <code>ABSENT</code> <code>MatchOption</code> is applied to the Cost Categories <code>Key</code> only. That is, it filters on resources without the given Cost Categories key.</p>
type CostCategoryValues struct {
	Key          *string           `json:"Key,omitempty"`
	MatchOptions []MatchOptionEnum `json:"MatchOptions,omitempty"`
	Values       []string          `json:"Values,omitempty"`
}
