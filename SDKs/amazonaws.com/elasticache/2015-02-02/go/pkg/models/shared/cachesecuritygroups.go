package shared

// CacheSecurityGroups
// <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
type CacheSecurityGroups struct {
	ARN                    *string
	CacheSecurityGroupName *string
	Description            *string
	Ec2SecurityGroups      []Ec2SecurityGroupList
	OwnerID                *string
}
