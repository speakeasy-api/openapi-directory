package shared

import (
	"time"
)

type AutoImportConfiguration struct {
	DuplicateProductConfiguration DuplicateProductValueConfiguration `json:"duplicateProductConfiguration"`
	Input                         InputConfiguration                 `json:"input"`
	InputConfiguredByUserID       string                             `json:"inputConfiguredByUserId"`
	PauseStatusChangedByUserID    *string                            `json:"pauseStatusChangedByUserId,omitempty"`
	PauseStatusChangedUtcDate     *time.Time                         `json:"pauseStatusChangedUtcDate,omitempty"`
	Paused                        bool                               `json:"paused"`
	ScheduledByUserID             *string                            `json:"scheduledByUserId,omitempty"`
	SchedulingLocalTimeZoneName   *string                            `json:"schedulingLocalTimeZoneName,omitempty"`
	SchedulingType                SchedulingTypeEnum                 `json:"schedulingType"`
	SchedulingValue               []string                           `json:"schedulingValue"`
}
