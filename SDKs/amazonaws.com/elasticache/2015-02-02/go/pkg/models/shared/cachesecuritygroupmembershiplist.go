package shared

// CacheSecurityGroupMembershipList
// Represents a cluster's status within a particular cache security group.
type CacheSecurityGroupMembershipList struct {
	CacheSecurityGroupName *string
	Status                 *string
}
