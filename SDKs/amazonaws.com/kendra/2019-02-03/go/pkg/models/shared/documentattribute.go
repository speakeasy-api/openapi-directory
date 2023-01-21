package shared

// DocumentAttribute
// A custom attribute value assigned to a document.
type DocumentAttribute struct {
	Key   string                 `json:"Key"`
	Value DocumentAttributeValue `json:"Value"`
}
