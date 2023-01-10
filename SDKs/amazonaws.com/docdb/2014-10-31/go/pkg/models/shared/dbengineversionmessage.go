package shared

// DbEngineVersionMessage
// Represents the output of <a>DescribeDBEngineVersions</a>.
type DbEngineVersionMessage struct {
	DBEngineVersions []DbEngineVersionList
	Marker           *string
}
