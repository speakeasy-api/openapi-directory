package shared

import (
	"time"
)

// ScheduledActionList
// Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>.
type ScheduledActionList struct {
	EndTime                    *time.Time
	IamRole                    *string
	NextInvocations            []map[string]interface{}
	Schedule                   *string
	ScheduledActionDescription *string
	ScheduledActionName        *string
	StartTime                  *time.Time
	State                      *ScheduledActionStateEnum
	TargetAction               *ScheduledActionType
}
