package shared

// OptionGroupOptionSettingsList
// Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
type OptionGroupOptionSettingsList struct {
	AllowedValues                       *string
	ApplyType                           *string
	DefaultValue                        *string
	IsModifiable                        *bool
	IsRequired                          *bool
	MinimumEngineVersionPerAllowedValue []MinimumEngineVersionPerAllowedValueList
	SettingDescription                  *string
	SettingName                         *string
}
