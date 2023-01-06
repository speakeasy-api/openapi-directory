package shared

// CacheParameterGroupsMessage
// Represents the output of a <code>DescribeCacheParameterGroups</code> operation.
type CacheParameterGroupsMessage struct {
	CacheParameterGroups []map[string]interface{}
	Marker               *string
}
