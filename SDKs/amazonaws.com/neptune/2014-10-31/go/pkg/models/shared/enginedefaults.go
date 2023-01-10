package shared

// EngineDefaults
//
//	Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.
type EngineDefaults struct {
	DBParameterGroupFamily *string
	Marker                 *string
	Parameters             []ParametersList
}
