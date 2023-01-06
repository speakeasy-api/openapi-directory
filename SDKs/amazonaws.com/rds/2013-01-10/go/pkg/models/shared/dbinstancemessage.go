package shared

type DbInstanceMessage struct {
	DBInstances []map[string]interface{}
	Marker      *string
}
