package shared

type OptionGroupOptionsList struct {
	DefaultPort                       *int64
	Description                       *string
	EngineName                        *string
	MajorEngineVersion                *string
	MinimumRequiredMinorEngineVersion *string
	Name                              *string
	OptionsDependedOn                 []map[string]interface{}
	PortRequired                      *bool
}
