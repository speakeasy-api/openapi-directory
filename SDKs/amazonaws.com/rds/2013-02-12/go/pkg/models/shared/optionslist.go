package shared

type OptionsList struct {
	DBSecurityGroupMemberships  []DbSecurityGroupMembershipList
	OptionDescription           *string
	OptionName                  *string
	OptionSettings              []OptionSettingConfigurationList
	Persistent                  *bool
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembershipList
}
