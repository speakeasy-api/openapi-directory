package shared

// Ec2SecurityGroupList
// Provides ownership and status information for an Amazon EC2 security group.
type Ec2SecurityGroupList struct {
	Ec2SecurityGroupName    *string
	Ec2SecurityGroupOwnerID *string
	Status                  *string
}
