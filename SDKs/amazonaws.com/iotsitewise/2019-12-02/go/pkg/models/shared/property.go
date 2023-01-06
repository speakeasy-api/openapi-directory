package shared

// Property
// Contains asset property information.
type Property struct {
	Alias        map[string]interface{} `json:"alias,omitempty"`
	DataType     PropertyDataTypeEnum   `json:"dataType"`
	ID           string                 `json:"id"`
	Name         string                 `json:"name"`
	Notification *PropertyNotification1 `json:"notification,omitempty"`
	Type         *PropertyType          `json:"type,omitempty"`
	Unit         *string                `json:"unit,omitempty"`
}
