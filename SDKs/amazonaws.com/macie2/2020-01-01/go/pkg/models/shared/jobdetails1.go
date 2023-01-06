package shared

import (
	"time"
)

// JobDetails1
// Specifies whether any one-time or recurring classification jobs are configured to analyze data in an S3 bucket, and, if so, the details of the job that ran most recently.
type JobDetails1 struct {
	IsDefinedInJob   *IsDefinedInJobEnum    `json:"isDefinedInJob,omitempty"`
	IsMonitoredByJob map[string]interface{} `json:"isMonitoredByJob,omitempty"`
	LastJobID        *string                `json:"lastJobId,omitempty"`
	LastJobRunTime   *time.Time             `json:"lastJobRunTime,omitempty"`
}
