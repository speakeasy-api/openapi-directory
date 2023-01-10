package shared

import (
	"time"
)

// ServiceUpdateList
// An update that you can apply to your Redis clusters.
type ServiceUpdateList struct {
	AutoUpdateAfterRecommendedApplyByDate *bool
	Engine                                *string
	EngineVersion                         *string
	EstimatedUpdateTime                   *string
	ServiceUpdateDescription              *string
	ServiceUpdateEndDate                  *time.Time
	ServiceUpdateName                     *string
	ServiceUpdateRecommendedApplyByDate   *time.Time
	ServiceUpdateReleaseDate              *time.Time
	ServiceUpdateSeverity                 *ServiceUpdateSeverityEnum
	ServiceUpdateStatus                   *ServiceUpdateStatusEnum
	ServiceUpdateType                     *ServiceUpdateTypeEnum
}
