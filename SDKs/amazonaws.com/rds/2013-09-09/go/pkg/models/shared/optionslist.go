package shared

type OptionsList struct {
	DBSecurityGroupMemberships  []DbSecurityGroupMembershipList
	OptionDescription           *string
	OptionName                  *string
	OptionSettings              []OptionSettingConfigurationList
	Permanent                   *bool
	Persistent                  *bool
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembershipList
}
