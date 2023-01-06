package shared

// FormEntryField
// Attributes of the form including its included fields and css styles
type FormEntryField struct {
	Name  *string `json:"name,omitempty"`
	Order *int32  `json:"order,omitempty"`
	Value *string `json:"value,omitempty"`
}
