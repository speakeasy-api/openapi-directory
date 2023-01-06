package shared

// VpcSecurityGroupMembershipList
// This data type is used as a response element for queries on VPC security group membership.
type VpcSecurityGroupMembershipList struct {
	Status             map[string]interface{}
	VpcSecurityGroupID *string
}
