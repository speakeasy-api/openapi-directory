package shared

import (
	"time"
)

// TextTranslationJobProperties1
// Provides information about a translation job.
type TextTranslationJobProperties1 struct {
	DataAccessRoleArn   *string            `json:"DataAccessRoleArn,omitempty"`
	EndTime             *time.Time         `json:"EndTime,omitempty"`
	InputDataConfig     *InputDataConfig   `json:"InputDataConfig,omitempty"`
	JobDetails          *JobDetails        `json:"JobDetails,omitempty"`
	JobID               *string            `json:"JobId,omitempty"`
	JobName             *string            `json:"JobName,omitempty"`
	JobStatus           *JobStatusEnum     `json:"JobStatus,omitempty"`
	Message             *string            `json:"Message,omitempty"`
	OutputDataConfig    *OutputDataConfig1 `json:"OutputDataConfig,omitempty"`
	ParallelDataNames   []string           `json:"ParallelDataNames,omitempty"`
	SourceLanguageCode  *string            `json:"SourceLanguageCode,omitempty"`
	SubmittedTime       *time.Time         `json:"SubmittedTime,omitempty"`
	TargetLanguageCodes []string           `json:"TargetLanguageCodes,omitempty"`
	TerminologyNames    []string           `json:"TerminologyNames,omitempty"`
}
