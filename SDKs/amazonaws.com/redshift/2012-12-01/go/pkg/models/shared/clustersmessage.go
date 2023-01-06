package shared

// ClustersMessage
// Contains the output from the <a>DescribeClusters</a> action.
type ClustersMessage struct {
	Clusters []map[string]interface{}
	Marker   *string
}
