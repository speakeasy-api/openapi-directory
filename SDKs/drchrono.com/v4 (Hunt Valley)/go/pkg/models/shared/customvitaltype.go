package shared

type CustomVitalTypeDataTypeEnum string

const (
	CustomVitalTypeDataTypeEnumText      CustomVitalTypeDataTypeEnum = "text"
	CustomVitalTypeDataTypeEnumNumber    CustomVitalTypeDataTypeEnum = "number"
	CustomVitalTypeDataTypeEnumSingleSel CustomVitalTypeDataTypeEnum = "single_sel"
)

type CustomVitalType struct {
	AllowedValues     []string                     `json:"allowed_values,omitempty"`
	Archived          *bool                        `json:"archived,omitempty"`
	DataType          *CustomVitalTypeDataTypeEnum `json:"data_type,omitempty"`
	Description       *string                      `json:"description,omitempty"`
	Doctor            *string                      `json:"doctor,omitempty"`
	FractionDelimiter *string                      `json:"fraction_delimiter,omitempty"`
	ID                *int64                       `json:"id,omitempty"`
	IsFractionField   *bool                        `json:"is_fraction_field,omitempty"`
	Name              *string                      `json:"name,omitempty"`
	Unit              *string                      `json:"unit,omitempty"`
}
