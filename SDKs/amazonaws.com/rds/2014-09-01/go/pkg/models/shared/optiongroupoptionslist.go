package shared

type OptionGroupOptionsList struct {
	DefaultPort                       *int64
	Description                       *string
	EngineName                        *string
	MajorEngineVersion                *string
	MinimumRequiredMinorEngineVersion *string
	Name                              *string
	OptionGroupOptionSettings         []OptionGroupOptionSettingsList
	OptionsDependedOn                 []map[string]interface{}
	Permanent                         *bool
	Persistent                        *bool
	PortRequired                      *bool
}
