package shared

// DbSecurityGroup
// <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
type DbSecurityGroup struct {
	DBSecurityGroupArn         *string
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []map[string]interface{}
	IPRanges                   []map[string]interface{}
	OwnerID                    *string
	VpcID                      *string
}
