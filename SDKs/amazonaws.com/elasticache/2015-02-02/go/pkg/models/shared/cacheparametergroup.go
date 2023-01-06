package shared

// CacheParameterGroup
// Represents the output of a <code>CreateCacheParameterGroup</code> operation.
type CacheParameterGroup struct {
	ARN                       *string
	CacheParameterGroupFamily *string
	CacheParameterGroupName   *string
	Description               *string
	IsGlobal                  *bool
}
