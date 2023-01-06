package shared

// EngineDefaults
// Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
type EngineDefaults struct {
	CacheNodeTypeSpecificParameters []map[string]interface{}
	CacheParameterGroupFamily       *string
	Marker                          *string
	Parameters                      []map[string]interface{}
}
