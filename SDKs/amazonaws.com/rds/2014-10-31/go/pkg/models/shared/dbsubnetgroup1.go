package shared

// DbSubnetGroup1
// <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
type DbSubnetGroup1 struct {
	DBSubnetGroupArn         *string
	DBSubnetGroupDescription *string
	DBSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  map[string]interface{}
	VpcID                    *string
}
