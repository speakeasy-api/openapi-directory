package shared

// OptionGroupOptionsList
// Available option.
type OptionGroupOptionsList struct {
	DefaultPort                           *int64
	Description                           *string
	EngineName                            *string
	MajorEngineVersion                    *string
	MinimumRequiredMinorEngineVersion     *string
	Name                                  *string
	OptionGroupOptionSettings             []OptionGroupOptionSettingsList
	OptionGroupOptionVersions             []OptionGroupOptionVersionsList
	OptionsConflictsWith                  []map[string]interface{}
	OptionsDependedOn                     []map[string]interface{}
	Permanent                             *bool
	Persistent                            *bool
	PortRequired                          *bool
	RequiresAutoMinorEngineVersionUpgrade *bool
	SupportsOptionVersionDowngrade        *bool
	VpcOnly                               *bool
}
