package shared

type CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum string

const (
	CustomFieldSettingResponseCustomFieldCustomLabelPositionEnumPrefix CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = "prefix"
	CustomFieldSettingResponseCustomFieldCustomLabelPositionEnumSuffix CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = "suffix"
)

// CustomFieldSettingResponseCustomFieldEnumValue
// *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
type CustomFieldSettingResponseCustomFieldEnumValue struct {
	Color        *string `json:"color,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

type CustomFieldSettingResponseCustomFieldFormatEnum string

const (
	CustomFieldSettingResponseCustomFieldFormatEnumCurrency   CustomFieldSettingResponseCustomFieldFormatEnum = "currency"
	CustomFieldSettingResponseCustomFieldFormatEnumIdentifier CustomFieldSettingResponseCustomFieldFormatEnum = "identifier"
	CustomFieldSettingResponseCustomFieldFormatEnumPercentage CustomFieldSettingResponseCustomFieldFormatEnum = "percentage"
	CustomFieldSettingResponseCustomFieldFormatEnumCustom     CustomFieldSettingResponseCustomFieldFormatEnum = "custom"
	CustomFieldSettingResponseCustomFieldFormatEnumNone       CustomFieldSettingResponseCustomFieldFormatEnum = "none"
)

type CustomFieldSettingResponseCustomFieldResourceSubtypeEnum string

const (
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumText      CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "text"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumEnum      CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "enum"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumMultiEnum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "multi_enum"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumNumber    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "number"
)

type CustomFieldSettingResponseCustomFieldTypeEnum string

const (
	CustomFieldSettingResponseCustomFieldTypeEnumText      CustomFieldSettingResponseCustomFieldTypeEnum = "text"
	CustomFieldSettingResponseCustomFieldTypeEnumEnum      CustomFieldSettingResponseCustomFieldTypeEnum = "enum"
	CustomFieldSettingResponseCustomFieldTypeEnumMultiEnum CustomFieldSettingResponseCustomFieldTypeEnum = "multi_enum"
	CustomFieldSettingResponseCustomFieldTypeEnumNumber    CustomFieldSettingResponseCustomFieldTypeEnum = "number"
)

// CustomFieldSettingResponseCustomField
// The custom field that is applied to the `parent`.
type CustomFieldSettingResponseCustomField struct {
	CreatedBy               *UserCompact                                                  `json:"created_by,omitempty"`
	CurrencyCode            *string                                                       `json:"currency_code,omitempty"`
	CustomLabel             *string                                                       `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                                       `json:"description,omitempty"`
	DisplayValue            *string                                                       `json:"display_value,omitempty"`
	Enabled                 *bool                                                         `json:"enabled,omitempty"`
	EnumOptions             []EnumOption                                                  `json:"enum_options,omitempty"`
	EnumValue               *CustomFieldSettingResponseCustomFieldEnumValue               `json:"enum_value,omitempty"`
	Format                  *CustomFieldSettingResponseCustomFieldFormatEnum              `json:"format,omitempty"`
	Gid                     *string                                                       `json:"gid,omitempty"`
	HasNotificationsEnabled *bool                                                         `json:"has_notifications_enabled,omitempty"`
	IsGlobalToWorkspace     *bool                                                         `json:"is_global_to_workspace,omitempty"`
	MultiEnumValues         []EnumOption                                                  `json:"multi_enum_values,omitempty"`
	Name                    *string                                                       `json:"name,omitempty"`
	NumberValue             *float64                                                      `json:"number_value,omitempty"`
	Precision               *int64                                                        `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldSettingResponseCustomFieldResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	ResourceType            *string                                                       `json:"resource_type,omitempty"`
	TextValue               *string                                                       `json:"text_value,omitempty"`
	Type                    *CustomFieldSettingResponseCustomFieldTypeEnum                `json:"type,omitempty"`
}

// CustomFieldSettingResponseParent
// The parent to which the custom field is applied. This can be a project or portfolio and indicates that the tasks or projects that the parent contains may be given custom field values for this custom field.
type CustomFieldSettingResponseParent struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// CustomFieldSettingResponseProject
// *Deprecated: new integrations should prefer the `parent` field.* The id of the project that this custom field settings refers to.
type CustomFieldSettingResponseProject struct {
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// CustomFieldSettingResponse
// Custom Fields Settings objects represent the many-to-many join of the Custom Field and Project as well as stores information that is relevant to that particular pairing.
type CustomFieldSettingResponse struct {
	CustomField  *CustomFieldSettingResponseCustomField `json:"custom_field,omitempty"`
	Gid          *string                                `json:"gid,omitempty"`
	IsImportant  *bool                                  `json:"is_important,omitempty"`
	Parent       *CustomFieldSettingResponseParent      `json:"parent,omitempty"`
	Project      *CustomFieldSettingResponseProject     `json:"project,omitempty"`
	ResourceType *string                                `json:"resource_type,omitempty"`
}
