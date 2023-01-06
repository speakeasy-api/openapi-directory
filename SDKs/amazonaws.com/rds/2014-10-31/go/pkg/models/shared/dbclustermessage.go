package shared

// DbClusterMessage
// Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.
type DbClusterMessage struct {
	DBClusters []map[string]interface{}
	Marker     *string
}
