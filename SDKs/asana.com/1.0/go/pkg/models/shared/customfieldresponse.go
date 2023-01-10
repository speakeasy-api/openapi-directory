package shared

type CustomFieldResponseCustomLabelPositionEnum string

const (
	CustomFieldResponseCustomLabelPositionEnumPrefix CustomFieldResponseCustomLabelPositionEnum = "prefix"
	CustomFieldResponseCustomLabelPositionEnumSuffix CustomFieldResponseCustomLabelPositionEnum = "suffix"
)

// CustomFieldResponseEnumValue
// *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
type CustomFieldResponseEnumValue struct {
	Color        *string `json:"color,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type CustomFieldResponseFormatEnum string

const (
	CustomFieldResponseFormatEnumCurrency   CustomFieldResponseFormatEnum = "currency"
	CustomFieldResponseFormatEnumIdentifier CustomFieldResponseFormatEnum = "identifier"
	CustomFieldResponseFormatEnumPercentage CustomFieldResponseFormatEnum = "percentage"
	CustomFieldResponseFormatEnumCustom     CustomFieldResponseFormatEnum = "custom"
	CustomFieldResponseFormatEnumNone       CustomFieldResponseFormatEnum = "none"
)

type CustomFieldResponseResourceSubtypeEnum string

const (
	CustomFieldResponseResourceSubtypeEnumText      CustomFieldResponseResourceSubtypeEnum = "text"
	CustomFieldResponseResourceSubtypeEnumEnum      CustomFieldResponseResourceSubtypeEnum = "enum"
	CustomFieldResponseResourceSubtypeEnumMultiEnum CustomFieldResponseResourceSubtypeEnum = "multi_enum"
	CustomFieldResponseResourceSubtypeEnumNumber    CustomFieldResponseResourceSubtypeEnum = "number"
)

type CustomFieldResponseTypeEnum string

const (
	CustomFieldResponseTypeEnumText      CustomFieldResponseTypeEnum = "text"
	CustomFieldResponseTypeEnumEnum      CustomFieldResponseTypeEnum = "enum"
	CustomFieldResponseTypeEnumMultiEnum CustomFieldResponseTypeEnum = "multi_enum"
	CustomFieldResponseTypeEnumNumber    CustomFieldResponseTypeEnum = "number"
)

// CustomFieldResponse
// Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
//
// Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
type CustomFieldResponse struct {
	CreatedBy               *UserCompact                                `json:"created_by,omitempty"`
	CurrencyCode            *string                                     `json:"currency_code,omitempty"`
	CustomLabel             *string                                     `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldResponseCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                     `json:"description,omitempty"`
	DisplayValue            *string                                     `json:"display_value,omitempty"`
	Enabled                 *bool                                       `json:"enabled,omitempty"`
	EnumOptions             []EnumOption                                `json:"enum_options,omitempty"`
	EnumValue               *CustomFieldResponseEnumValue               `json:"enum_value,omitempty"`
	Format                  *CustomFieldResponseFormatEnum              `json:"format,omitempty"`
	Gid                     *string                                     `json:"gid,omitempty"`
	HasNotificationsEnabled *bool                                       `json:"has_notifications_enabled,omitempty"`
	IsGlobalToWorkspace     *bool                                       `json:"is_global_to_workspace,omitempty"`
	MultiEnumValues         []EnumOption                                `json:"multi_enum_values,omitempty"`
	Name                    *string                                     `json:"name,omitempty"`
	NumberValue             *float64                                    `json:"number_value,omitempty"`
	Precision               *int64                                      `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldResponseResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	ResourceType            *string                                     `json:"resource_type,omitempty"`
	TextValue               *string                                     `json:"text_value,omitempty"`
	Type                    *CustomFieldResponseTypeEnum                `json:"type,omitempty"`
}
