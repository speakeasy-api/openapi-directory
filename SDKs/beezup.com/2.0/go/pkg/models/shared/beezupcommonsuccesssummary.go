package shared

type BeezUpCommonSuccessSummary struct {
	ObjectName       *string           `json:"objectName,omitempty"`
	PropertyName     *string           `json:"propertyName,omitempty"`
	PropertyValue    *string           `json:"propertyValue,omitempty"`
	SuccessArguments map[string]string `json:"successArguments,omitempty"`
	SuccessCode      *string           `json:"successCode,omitempty"`
	SuccessMessage   *string           `json:"successMessage,omitempty"`
}
