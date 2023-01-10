package shared

// DbInstanceMessage
// Represents the output of <a>DescribeDBInstances</a>.
type DbInstanceMessage struct {
	DBInstances []DbInstanceList
	Marker      *string
}
