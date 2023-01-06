package shared

// CacheClusterMessage
// Represents the output of a <code>DescribeCacheClusters</code> operation.
type CacheClusterMessage struct {
	CacheClusters []map[string]interface{}
	Marker        *string
}
