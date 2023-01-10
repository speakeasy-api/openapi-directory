package shared

type CustomFieldRequestCustomLabelPositionEnum string

const (
	CustomFieldRequestCustomLabelPositionEnumPrefix CustomFieldRequestCustomLabelPositionEnum = "prefix"
	CustomFieldRequestCustomLabelPositionEnumSuffix CustomFieldRequestCustomLabelPositionEnum = "suffix"
)

type CustomFieldRequestFormatEnum string

const (
	CustomFieldRequestFormatEnumCurrency   CustomFieldRequestFormatEnum = "currency"
	CustomFieldRequestFormatEnumIdentifier CustomFieldRequestFormatEnum = "identifier"
	CustomFieldRequestFormatEnumPercentage CustomFieldRequestFormatEnum = "percentage"
	CustomFieldRequestFormatEnumCustom     CustomFieldRequestFormatEnum = "custom"
	CustomFieldRequestFormatEnumNone       CustomFieldRequestFormatEnum = "none"
)

type CustomFieldRequestResourceSubtypeEnum string

const (
	CustomFieldRequestResourceSubtypeEnumText      CustomFieldRequestResourceSubtypeEnum = "text"
	CustomFieldRequestResourceSubtypeEnumEnum      CustomFieldRequestResourceSubtypeEnum = "enum"
	CustomFieldRequestResourceSubtypeEnumMultiEnum CustomFieldRequestResourceSubtypeEnum = "multi_enum"
	CustomFieldRequestResourceSubtypeEnumNumber    CustomFieldRequestResourceSubtypeEnum = "number"
)

// CustomFieldRequestInput
// Custom Fields store the metadata that is used in order to add user-specified information to tasks in Asana. Be sure to reference the [Custom Fields](/docs/asana-custom-fields) developer documentation for more information about how custom fields relate to various resources in Asana.
//
// Users in Asana can [lock custom fields](https://asana.com/guide/help/premium/custom-fields#gl-lock-fields), which will make them read-only when accessed by other users. Attempting to edit a locked custom field will return HTTP error code `403 Forbidden`.
type CustomFieldRequestInput struct {
	CurrencyCode            *string                                    `json:"currency_code,omitempty"`
	CustomLabel             *string                                    `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldRequestCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                    `json:"description,omitempty"`
	Enabled                 *bool                                      `json:"enabled,omitempty"`
	EnumOptions             []EnumOptionInput                          `json:"enum_options,omitempty"`
	Format                  *CustomFieldRequestFormatEnum              `json:"format,omitempty"`
	HasNotificationsEnabled *bool                                      `json:"has_notifications_enabled,omitempty"`
	Name                    *string                                    `json:"name,omitempty"`
	NumberValue             *float64                                   `json:"number_value,omitempty"`
	Precision               *int64                                     `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldRequestResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	TextValue               *string                                    `json:"text_value,omitempty"`
	Workspace               string                                     `json:"workspace"`
}
