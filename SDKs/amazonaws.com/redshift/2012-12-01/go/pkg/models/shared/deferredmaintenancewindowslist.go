package shared

import (
	"time"
)

// DeferredMaintenanceWindowsList
// Describes a deferred maintenance window
type DeferredMaintenanceWindowsList struct {
	DeferMaintenanceEndTime    *time.Time
	DeferMaintenanceIdentifier *string
	DeferMaintenanceStartTime  *time.Time
}
