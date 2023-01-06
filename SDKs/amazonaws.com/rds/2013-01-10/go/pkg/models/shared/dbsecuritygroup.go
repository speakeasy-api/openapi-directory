package shared

type DbSecurityGroup struct {
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroupList
	IPRanges                   []map[string]interface{}
	OwnerID                    *string
	VpcID                      *string
}
