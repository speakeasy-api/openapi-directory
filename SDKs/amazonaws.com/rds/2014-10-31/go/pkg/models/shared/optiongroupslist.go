package shared

// OptionGroupsList
// <p/>
type OptionGroupsList struct {
	AllowsVpcAndNonVpcInstanceMemberships *bool
	EngineName                            *string
	MajorEngineVersion                    *string
	OptionGroupArn                        *string
	OptionGroupDescription                *string
	OptionGroupName                       *string
	Options                               []OptionsList
	VpcID                                 *string
}
