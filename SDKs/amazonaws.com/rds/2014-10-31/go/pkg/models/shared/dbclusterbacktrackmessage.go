package shared

// DbClusterBacktrackMessage
// Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.
type DbClusterBacktrackMessage struct {
	DBClusterBacktracks []DbClusterBacktrackList
	Marker              *string
}
