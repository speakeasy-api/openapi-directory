package shared

import (
	"time"
)

// ImportationReporting
// The catalog importation reporting
type ImportationReporting struct {
	AutoImported             *bool                          `json:"autoImported,omitempty"`
	BeginUtcDate             time.Time                      `json:"beginUtcDate"`
	EndUtcDate               *time.Time                     `json:"endUtcDate,omitempty"`
	Errors                   []BeezUpCommonUserErrorMessage `json:"errors,omitempty"`
	ExecutionID              string                         `json:"executionId"`
	InputConfigurationURL    *string                        `json:"inputConfigurationUrl,omitempty"`
	LastUpdateUtcDate        time.Time                      `json:"lastUpdateUtcDate"`
	Links                    *ImportationReportingLinks     `json:"links,omitempty"`
	StepName                 *string                        `json:"stepName,omitempty"`
	Steps                    map[string]bool                `json:"steps"`
	Success                  *bool                          `json:"success,omitempty"`
	TotalProductCount        *int32                         `json:"totalProductCount,omitempty"`
	TotalProductErrorCount   *int32                         `json:"totalProductErrorCount,omitempty"`
	TotalProductSuccessCount *int32                         `json:"totalProductSuccessCount,omitempty"`
	UserID                   *string                        `json:"userId,omitempty"`
}
