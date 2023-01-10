package shared

// CacheSecurityGroupMessage
// Represents the output of a <code>DescribeCacheSecurityGroups</code> operation.
type CacheSecurityGroupMessage struct {
	CacheSecurityGroups []CacheSecurityGroups
	Marker              *string
}
