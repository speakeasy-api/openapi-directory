package shared

import (
	"time"
)

// EntityRecognizerProperties1
// Describes information about an entity recognizer.
type EntityRecognizerProperties1 struct {
	DataAccessRoleArn   *string                          `json:"DataAccessRoleArn,omitempty"`
	EndTime             *time.Time                       `json:"EndTime,omitempty"`
	EntityRecognizerArn *string                          `json:"EntityRecognizerArn,omitempty"`
	InputDataConfig     *EntityRecognizerInputDataConfig `json:"InputDataConfig,omitempty"`
	LanguageCode        *LanguageCodeEnum                `json:"LanguageCode,omitempty"`
	Message             *string                          `json:"Message,omitempty"`
	ModelKmsKeyID       *string                          `json:"ModelKmsKeyId,omitempty"`
	RecognizerMetadata  *EntityRecognizerMetadata        `json:"RecognizerMetadata,omitempty"`
	Status              map[string]interface{}           `json:"Status,omitempty"`
	SubmitTime          *time.Time                       `json:"SubmitTime,omitempty"`
	TrainingEndTime     *time.Time                       `json:"TrainingEndTime,omitempty"`
	TrainingStartTime   *time.Time                       `json:"TrainingStartTime,omitempty"`
	VolumeKmsKeyID      *string                          `json:"VolumeKmsKeyId,omitempty"`
	VpcConfig           *VpcConfig                       `json:"VpcConfig,omitempty"`
}
