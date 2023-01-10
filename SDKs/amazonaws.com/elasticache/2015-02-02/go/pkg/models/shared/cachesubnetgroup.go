package shared

// CacheSubnetGroup
// <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
type CacheSubnetGroup struct {
	ARN                         *string
	CacheSubnetGroupDescription *string
	CacheSubnetGroupName        *string
	Subnets                     []SubnetList
	VpcID                       *string
}
