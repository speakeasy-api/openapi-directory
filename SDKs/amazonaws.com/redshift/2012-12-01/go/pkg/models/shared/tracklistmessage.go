package shared

type TrackListMessage struct {
	MaintenanceTracks []map[string]interface{}
	Marker            *string
}
