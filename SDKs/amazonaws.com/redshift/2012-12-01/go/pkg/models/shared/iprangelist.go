package shared

// IPRangeList
// Describes an IP range used in a security group.
type IPRangeList struct {
	CIDRIP *string
	Status *string
	Tags   []TagList
}
