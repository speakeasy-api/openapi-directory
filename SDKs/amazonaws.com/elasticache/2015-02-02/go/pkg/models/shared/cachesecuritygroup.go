package shared

// CacheSecurityGroup
// <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
type CacheSecurityGroup struct {
	ARN                    *string
	CacheSecurityGroupName *string
	Description            *string
	Ec2SecurityGroups      []map[string]interface{}
	OwnerID                *string
}
