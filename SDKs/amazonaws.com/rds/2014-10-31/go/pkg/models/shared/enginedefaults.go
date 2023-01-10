package shared

// EngineDefaults
//
//	Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
type EngineDefaults struct {
	DBParameterGroupFamily *string
	Marker                 *string
	Parameters             []ParametersList
}
