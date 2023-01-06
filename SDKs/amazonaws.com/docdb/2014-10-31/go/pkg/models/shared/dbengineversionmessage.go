package shared

// DbEngineVersionMessage
// Represents the output of <a>DescribeDBEngineVersions</a>.
type DbEngineVersionMessage struct {
	DBEngineVersions []map[string]interface{}
	Marker           *string
}
