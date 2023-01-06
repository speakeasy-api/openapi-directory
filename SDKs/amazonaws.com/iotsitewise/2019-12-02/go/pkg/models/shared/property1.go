package shared

// Property1
// Contains asset property information.
type Property1 struct {
	Alias        *string                `json:"alias,omitempty"`
	DataType     PropertyDataTypeEnum   `json:"dataType"`
	ID           string                 `json:"id"`
	Name         string                 `json:"name"`
	Notification *PropertyNotification1 `json:"notification,omitempty"`
	Type         *PropertyType          `json:"type,omitempty"`
	Unit         *string                `json:"unit,omitempty"`
}
