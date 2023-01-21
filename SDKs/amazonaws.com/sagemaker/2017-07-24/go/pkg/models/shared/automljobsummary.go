package shared

import (
	"time"
)

// AutoMlJobSummary
// Provides a summary about an AutoML job.
type AutoMlJobSummary struct {
	AutoMLJobArn             string                       `json:"AutoMLJobArn"`
	AutoMLJobName            string                       `json:"AutoMLJobName"`
	AutoMLJobSecondaryStatus AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
	AutoMLJobStatus          AutoMlJobStatusEnum          `json:"AutoMLJobStatus"`
	CreationTime             time.Time                    `json:"CreationTime"`
	EndTime                  *time.Time                   `json:"EndTime,omitempty"`
	FailureReason            *string                      `json:"FailureReason,omitempty"`
	LastModifiedTime         time.Time                    `json:"LastModifiedTime"`
	PartialFailureReasons    []AutoMlPartialFailureReason `json:"PartialFailureReasons,omitempty"`
}
