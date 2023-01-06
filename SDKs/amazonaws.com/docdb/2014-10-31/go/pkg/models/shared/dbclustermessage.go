package shared

// DbClusterMessage
// Represents the output of <a>DescribeDBClusters</a>.
type DbClusterMessage struct {
	DBClusters []map[string]interface{}
	Marker     *string
}
