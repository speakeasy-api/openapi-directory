package shared

type ServiceUpdatesMessage struct {
	Marker         *string
	ServiceUpdates []map[string]interface{}
}
