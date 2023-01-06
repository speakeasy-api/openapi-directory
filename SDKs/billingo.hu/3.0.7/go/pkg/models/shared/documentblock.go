package shared

type DocumentBlock struct {
	CustomField1 *string `json:"custom_field1,omitempty"`
	CustomField2 *string `json:"custom_field2,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Name         *string `json:"name,omitempty"`
	Prefix       *string `json:"prefix,omitempty"`
}
