package shared

// CustomHeaders
// A complex type that contains the list of Custom Headers for each origin.
type CustomHeaders struct {
	Items    []OriginCustomHeadersList
	Quantity int64
}
