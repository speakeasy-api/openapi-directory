package shared

type CustomFieldCompactResourceSubtypeEnum string

const (
	CustomFieldCompactResourceSubtypeEnumText      CustomFieldCompactResourceSubtypeEnum = "text"
	CustomFieldCompactResourceSubtypeEnumEnum      CustomFieldCompactResourceSubtypeEnum = "enum"
	CustomFieldCompactResourceSubtypeEnumMultiEnum CustomFieldCompactResourceSubtypeEnum = "multi_enum"
	CustomFieldCompactResourceSubtypeEnumNumber    CustomFieldCompactResourceSubtypeEnum = "number"
)

type CustomFieldCompactTypeEnum string

const (
	CustomFieldCompactTypeEnumText      CustomFieldCompactTypeEnum = "text"
	CustomFieldCompactTypeEnumEnum      CustomFieldCompactTypeEnum = "enum"
	CustomFieldCompactTypeEnumMultiEnum CustomFieldCompactTypeEnum = "multi_enum"
	CustomFieldCompactTypeEnumNumber    CustomFieldCompactTypeEnum = "number"
)

// CustomFieldCompact
// Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
//
// Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
type CustomFieldCompact struct {
	DisplayValue    *string                                `json:"display_value,omitempty"`
	Enabled         *bool                                  `json:"enabled,omitempty"`
	EnumOptions     []EnumOption                           `json:"enum_options,omitempty"`
	Gid             *string                                `json:"gid,omitempty"`
	Name            *string                                `json:"name,omitempty"`
	NumberValue     *float64                               `json:"number_value,omitempty"`
	ResourceSubtype *CustomFieldCompactResourceSubtypeEnum `json:"resource_subtype,omitempty"`
	ResourceType    *string                                `json:"resource_type,omitempty"`
	TextValue       *string                                `json:"text_value,omitempty"`
	Type            *CustomFieldCompactTypeEnum            `json:"type,omitempty"`
}
