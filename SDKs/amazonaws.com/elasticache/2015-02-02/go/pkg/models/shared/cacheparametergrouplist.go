package shared

// CacheParameterGroupList
// Represents the output of a <code>CreateCacheParameterGroup</code> operation.
type CacheParameterGroupList struct {
	ARN                       *string
	CacheParameterGroupFamily *string
	CacheParameterGroupName   *string
	Description               *string
	IsGlobal                  *bool
}
