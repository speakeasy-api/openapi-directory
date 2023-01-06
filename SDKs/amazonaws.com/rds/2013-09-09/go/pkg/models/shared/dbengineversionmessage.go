package shared

type DbEngineVersionMessage struct {
	DBEngineVersions []map[string]interface{}
	Marker           *string
}
