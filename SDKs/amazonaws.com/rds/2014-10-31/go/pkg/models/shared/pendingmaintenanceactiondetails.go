package shared

import (
	"time"
)

// PendingMaintenanceActionDetails
// Provides information about a pending maintenance action for a resource.
type PendingMaintenanceActionDetails struct {
	Action               *string
	AutoAppliedAfterDate *time.Time
	CurrentApplyDate     *time.Time
	Description          *string
	ForcedApplyDate      *time.Time
	OptInStatus          *string
}
