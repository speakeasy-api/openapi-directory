package shared

// TableRestoreStatusMessage
// <p/>
type TableRestoreStatusMessage struct {
	Marker                    *string
	TableRestoreStatusDetails []map[string]interface{}
}
