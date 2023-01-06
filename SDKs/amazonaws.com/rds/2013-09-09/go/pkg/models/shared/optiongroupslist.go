package shared

type OptionGroupsList struct {
	AllowsVpcAndNonVpcInstanceMemberships *bool
	EngineName                            *string
	MajorEngineVersion                    *string
	OptionGroupDescription                *string
	OptionGroupName                       *string
	Options                               []map[string]interface{}
	VpcID                                 *string
}
