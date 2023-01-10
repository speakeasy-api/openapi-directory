package shared

type DbInstanceMessage struct {
	DBInstances []DbInstanceList
	Marker      *string
}
