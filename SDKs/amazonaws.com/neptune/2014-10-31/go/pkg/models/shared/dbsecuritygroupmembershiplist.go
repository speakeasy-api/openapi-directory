package shared

// DbSecurityGroupMembershipList
// Specifies membership in a designated DB security group.
type DbSecurityGroupMembershipList struct {
	DBSecurityGroupName *string
	Status              *string
}
