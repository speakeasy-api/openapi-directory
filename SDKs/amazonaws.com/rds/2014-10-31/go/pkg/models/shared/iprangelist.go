package shared

// IPRangeList
//
//	This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.
type IPRangeList struct {
	CIDRIP *string
	Status *string
}
