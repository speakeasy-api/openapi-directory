package shared

// EngineDefaults
// Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.
type EngineDefaults struct {
	DBParameterGroupFamily *string
	Marker                 *string
	Parameters             []ParametersList
}
