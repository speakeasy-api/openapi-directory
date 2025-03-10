// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FieldFilter - A filter for fields. Only one value can be provided.
type FieldFilter struct {
	Contains             *FieldValue `json:"contains,omitempty"`
	EqualTo              *FieldValue `json:"equalTo,omitempty"`
	GreaterThan          *FieldValue `json:"greaterThan,omitempty"`
	GreaterThanOrEqualTo *FieldValue `json:"greaterThanOrEqualTo,omitempty"`
	LessThan             *FieldValue `json:"lessThan,omitempty"`
	LessThanOrEqualTo    *FieldValue `json:"lessThanOrEqualTo,omitempty"`
}
