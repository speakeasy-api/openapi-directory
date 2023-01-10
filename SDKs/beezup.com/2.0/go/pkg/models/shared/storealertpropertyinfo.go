package shared

type StoreAlertPropertyInfo struct {
	PropertyID                   int32   `json:"propertyId"`
	PropertyName                 string  `json:"propertyName"`
	PropertyValidationExpression *string `json:"propertyValidationExpression,omitempty"`
	PropertyValue                string  `json:"propertyValue"`
}
