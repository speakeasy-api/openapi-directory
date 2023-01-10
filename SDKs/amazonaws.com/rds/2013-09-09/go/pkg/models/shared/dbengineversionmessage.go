package shared

type DbEngineVersionMessage struct {
	DBEngineVersions []DbEngineVersionList
	Marker           *string
}
