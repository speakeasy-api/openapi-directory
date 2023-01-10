package shared

// DbClusterMessage
// Represents the output of <a>DescribeDBClusters</a>.
type DbClusterMessage struct {
	DBClusters []DbClusterList
	Marker     *string
}
