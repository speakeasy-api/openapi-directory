package shared

// SubnetList
//
//	This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation.
type SubnetList struct {
	SubnetAvailabilityZone *AvailabilityZone
	SubnetIdentifier       *string
	SubnetOutpost          *Outpost
	SubnetStatus           *string
}
