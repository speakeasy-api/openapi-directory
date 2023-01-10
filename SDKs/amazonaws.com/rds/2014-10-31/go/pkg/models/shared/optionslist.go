package shared

// OptionsList
// Option details.
type OptionsList struct {
	DBSecurityGroupMemberships  []DbSecurityGroupMembershipList
	OptionDescription           *string
	OptionName                  *string
	OptionSettings              []OptionSettingConfigurationList
	OptionVersion               *string
	Permanent                   *bool
	Persistent                  *bool
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembershipList
}
