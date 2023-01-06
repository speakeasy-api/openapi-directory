package shared

// Aliases
// A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
type Aliases struct {
	Items    []map[string]interface{}
	Quantity int64
}
