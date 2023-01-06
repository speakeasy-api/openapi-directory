package shared

// CacheParameterGroupStatus1
// Status of the cache parameter group.
type CacheParameterGroupStatus1 struct {
	CacheNodeIdsToReboot    map[string]interface{}
	CacheParameterGroupName *string
	ParameterApplyStatus    *string
}
