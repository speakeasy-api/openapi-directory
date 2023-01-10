package shared

// DbInstanceStatusInfoList
// Provides a list of status information for a DB instance.
type DbInstanceStatusInfoList struct {
	Message    *string
	Normal     *bool
	Status     *string
	StatusType *string
}
