package shared

// OriginGroups
// A complex data type for the origin groups specified for a distribution.
type OriginGroups struct {
	Items    []OriginGroupList
	Quantity int64
}
