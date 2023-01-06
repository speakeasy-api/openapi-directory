package shared

import (
	"time"
)

// DescribeSentimentDetectionJobResponseSentimentDetectionJobPropertiesInputDataConfig
// The input properties for an inference job.
type DescribeSentimentDetectionJobResponseSentimentDetectionJobPropertiesInputDataConfig struct {
	DocumentReaderConfig *DocumentReaderConfig `json:"DocumentReaderConfig,omitempty"`
	InputFormat          *InputFormatEnum      `json:"InputFormat,omitempty"`
	S3URI                string                `json:"S3Uri"`
}

// DescribeSentimentDetectionJobResponseSentimentDetectionJobProperties
// Provides information about a sentiment detection job.
type DescribeSentimentDetectionJobResponseSentimentDetectionJobProperties struct {
	DataAccessRoleArn *string                                                                              `json:"DataAccessRoleArn,omitempty"`
	EndTime           *time.Time                                                                           `json:"EndTime,omitempty"`
	InputDataConfig   *DescribeSentimentDetectionJobResponseSentimentDetectionJobPropertiesInputDataConfig `json:"InputDataConfig,omitempty"`
	JobArn            *string                                                                              `json:"JobArn,omitempty"`
	JobID             *string                                                                              `json:"JobId,omitempty"`
	JobName           *string                                                                              `json:"JobName,omitempty"`
	JobStatus         *JobStatusEnum                                                                       `json:"JobStatus,omitempty"`
	LanguageCode      *LanguageCodeEnum                                                                    `json:"LanguageCode,omitempty"`
	Message           *string                                                                              `json:"Message,omitempty"`
	OutputDataConfig  *OutputDataConfig                                                                    `json:"OutputDataConfig,omitempty"`
	SubmitTime        *time.Time                                                                           `json:"SubmitTime,omitempty"`
	VolumeKmsKeyID    *string                                                                              `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig         *VpcConfig                                                                           `json:"VpcConfig,omitempty"`
}

type DescribeSentimentDetectionJobResponse struct {
	SentimentDetectionJobProperties *DescribeSentimentDetectionJobResponseSentimentDetectionJobProperties `json:"SentimentDetectionJobProperties,omitempty"`
}
