package shared

import (
	"time"
)

// ImportationMonitoring
// Describe the reporting of the catalog importation
type ImportationMonitoring struct {
	BeginUtcDate      time.Time                      `json:"beginUtcDate"`
	Errors            []BeezUpCommonUserErrorMessage `json:"errors,omitempty"`
	ExecutionID       string                         `json:"executionId"`
	LastUpdateUtcDate time.Time                      `json:"lastUpdateUtcDate"`
	Links             *ImportationMonitoringLinks    `json:"links,omitempty"`
	Steps             map[string]bool                `json:"steps"`
	Success           bool                           `json:"success"`
	UserID            *string                        `json:"userId,omitempty"`
}
