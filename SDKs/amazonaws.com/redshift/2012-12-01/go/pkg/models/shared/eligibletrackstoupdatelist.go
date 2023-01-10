package shared

// EligibleTracksToUpdateList
// A maintenance track that you can switch the current track to.
type EligibleTracksToUpdateList struct {
	DatabaseVersion      *string
	MaintenanceTrackName *string
	SupportedOperations  []SupportedOperationList
}
