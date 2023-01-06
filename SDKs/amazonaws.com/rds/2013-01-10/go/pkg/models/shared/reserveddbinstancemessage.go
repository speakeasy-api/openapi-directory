package shared

type ReservedDbInstanceMessage struct {
	Marker              *string
	ReservedDBInstances []map[string]interface{}
}
