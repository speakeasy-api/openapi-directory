package shared

// CacheClusterMessage
// Represents the output of a <code>DescribeCacheClusters</code> operation.
type CacheClusterMessage struct {
	CacheClusters []CacheClusterList
	Marker        *string
}
