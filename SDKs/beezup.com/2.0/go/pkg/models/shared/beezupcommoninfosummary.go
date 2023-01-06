package shared

type BeezUpCommonInfoSummary struct {
	InformationArguments map[string]string `json:"informationArguments,omitempty"`
	InformationCode      *string           `json:"informationCode,omitempty"`
	InformationMessage   *string           `json:"informationMessage,omitempty"`
	ObjectName           *string           `json:"objectName,omitempty"`
	PropertyName         *string           `json:"propertyName,omitempty"`
	PropertyValue        *string           `json:"propertyValue,omitempty"`
}
