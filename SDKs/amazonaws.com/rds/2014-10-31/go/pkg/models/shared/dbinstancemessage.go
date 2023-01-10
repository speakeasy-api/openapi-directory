package shared

// DbInstanceMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
type DbInstanceMessage struct {
	DBInstances []DbInstanceList
	Marker      *string
}
