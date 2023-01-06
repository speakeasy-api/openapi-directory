package shared

// DbInstanceMessage
// Represents the output of <a>DescribeDBInstances</a>.
type DbInstanceMessage struct {
	DBInstances []map[string]interface{}
	Marker      *string
}
