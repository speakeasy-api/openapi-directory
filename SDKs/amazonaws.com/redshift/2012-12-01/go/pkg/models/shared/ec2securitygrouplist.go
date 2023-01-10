package shared

// Ec2SecurityGroupList
// Describes an Amazon EC2 security group.
type Ec2SecurityGroupList struct {
	Ec2SecurityGroupName    *string
	Ec2SecurityGroupOwnerID *string
	Status                  *string
	Tags                    []TagList
}
