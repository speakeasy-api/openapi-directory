package shared

// FilterOperator
// The filter operator
type FilterOperator struct {
	ExpectedChannelColumnDataType *FilterOperatorDataTypeEnum `json:"expectedChannelColumnDataType,omitempty"`
	ExpectedValueDataType         *FilterOperatorDataTypeEnum `json:"expectedValueDataType,omitempty"`
	Name                          *string                     `json:"name,omitempty"`
	ValueRequired                 *bool                       `json:"valueRequired,omitempty"`
}
