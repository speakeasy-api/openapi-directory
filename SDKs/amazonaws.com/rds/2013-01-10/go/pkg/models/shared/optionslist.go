package shared

type OptionsList struct {
	DBSecurityGroupMemberships  []DbSecurityGroupMembershipList
	OptionDescription           *string
	OptionName                  *string
	Port                        *int64
	VpcSecurityGroupMemberships []VpcSecurityGroupMembershipList
}
