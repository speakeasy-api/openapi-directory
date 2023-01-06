package shared

// TypedLinkAttributeRange1
// Identifies the range of attributes that are used by a specified filter.
type TypedLinkAttributeRange1 struct {
	AttributeName *string                   `json:"AttributeName,omitempty"`
	Range         TypedAttributeValueRange1 `json:"Range"`
}
