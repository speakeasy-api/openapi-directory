package shared

// CacheParameterGroupDetails
// Represents the output of a <code>DescribeCacheParameters</code> operation.
type CacheParameterGroupDetails struct {
	CacheNodeTypeSpecificParameters []map[string]interface{}
	Marker                          *string
	Parameters                      []map[string]interface{}
}
