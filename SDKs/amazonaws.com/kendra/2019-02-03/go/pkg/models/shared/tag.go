package shared

// Tag
// A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
type Tag struct {
	Key   string `json:"Key"`
	Value string `json:"Value"`
}
