package shared

// KeyGroupList
// A list of key groups.
type KeyGroupList struct {
	Items      []map[string]interface{}
	MaxItems   int64
	NextMarker *string
	Quantity   int64
}
