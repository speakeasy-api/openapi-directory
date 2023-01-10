package shared

// DbSecurityGroups
// <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
type DbSecurityGroups struct {
	DBSecurityGroupArn         *string
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroupList
	IPRanges                   []IPRangeList
	OwnerID                    *string
	VpcID                      *string
}
