package shared

type StoreAlertPropertyInfo struct {
	PropertyName                 string  `json:"propertyName"`
	PropertyValidationExpression *string `json:"propertyValidationExpression,omitempty"`
}
