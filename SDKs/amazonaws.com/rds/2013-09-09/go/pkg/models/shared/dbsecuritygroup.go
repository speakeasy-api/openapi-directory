package shared

type DbSecurityGroup struct {
	DBSecurityGroupDescription *string
	DBSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroupList
	IPRanges                   []IPRangeList
	OwnerID                    *string
	VpcID                      *string
}
