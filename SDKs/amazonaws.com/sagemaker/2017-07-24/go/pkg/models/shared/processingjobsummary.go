// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ProcessingJobSummary - Summary of information about a processing job.
type ProcessingJobSummary struct {
	CreationTime        time.Time               `json:"CreationTime"`
	ExitMessage         *string                 `json:"ExitMessage,omitempty"`
	FailureReason       *string                 `json:"FailureReason,omitempty"`
	LastModifiedTime    *time.Time              `json:"LastModifiedTime,omitempty"`
	ProcessingEndTime   *time.Time              `json:"ProcessingEndTime,omitempty"`
	ProcessingJobArn    string                  `json:"ProcessingJobArn"`
	ProcessingJobName   string                  `json:"ProcessingJobName"`
	ProcessingJobStatus ProcessingJobStatusEnum `json:"ProcessingJobStatus"`
}
