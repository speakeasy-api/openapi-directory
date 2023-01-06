package shared

type DbSecurityGroup struct {
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []map[string]interface{}
	IPRanges                   []map[string]interface{}
	OwnerID                    *string
	VpcID                      *string
}
