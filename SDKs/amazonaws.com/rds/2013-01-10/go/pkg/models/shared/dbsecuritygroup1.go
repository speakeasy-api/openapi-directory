package shared

type DbSecurityGroup1 struct {
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []map[string]interface{}
	IPRanges                   []map[string]interface{}
	OwnerID                    *string
	VpcID                      *string
}
