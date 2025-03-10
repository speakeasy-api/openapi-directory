// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// Launch - This structure contains the configuration details of one Evidently launch.
type Launch struct {
	Arn                       string                           `json:"arn"`
	CreatedTime               time.Time                        `json:"createdTime"`
	Description               *string                          `json:"description,omitempty"`
	Execution                 *LaunchExecution                 `json:"execution,omitempty"`
	Groups                    []LaunchGroup                    `json:"groups,omitempty"`
	LastUpdatedTime           time.Time                        `json:"lastUpdatedTime"`
	MetricMonitors            []MetricMonitor                  `json:"metricMonitors,omitempty"`
	Name                      string                           `json:"name"`
	Project                   *string                          `json:"project,omitempty"`
	RandomizationSalt         *string                          `json:"randomizationSalt,omitempty"`
	ScheduledSplitsDefinition *ScheduledSplitsLaunchDefinition `json:"scheduledSplitsDefinition,omitempty"`
	Status                    LaunchStatusEnum                 `json:"status"`
	StatusReason              *string                          `json:"statusReason,omitempty"`
	Tags                      map[string]string                `json:"tags,omitempty"`
	Type                      LaunchTypeEnum                   `json:"type"`
}
