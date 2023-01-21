package shared

import (
	"time"
)

type DescribeAutoMlJobResponse struct {
	AutoMLJobArn                     string                       `json:"AutoMLJobArn"`
	AutoMLJobArtifacts               *AutoMlJobArtifacts          `json:"AutoMLJobArtifacts,omitempty"`
	AutoMLJobConfig                  *AutoMlJobConfig             `json:"AutoMLJobConfig,omitempty"`
	AutoMLJobName                    string                       `json:"AutoMLJobName"`
	AutoMLJobObjective               *AutoMlJobObjective          `json:"AutoMLJobObjective,omitempty"`
	AutoMLJobSecondaryStatus         AutoMlJobSecondaryStatusEnum `json:"AutoMLJobSecondaryStatus"`
	AutoMLJobStatus                  AutoMlJobStatusEnum          `json:"AutoMLJobStatus"`
	BestCandidate                    *AutoMlCandidate             `json:"BestCandidate,omitempty"`
	CreationTime                     time.Time                    `json:"CreationTime"`
	EndTime                          *time.Time                   `json:"EndTime,omitempty"`
	FailureReason                    *string                      `json:"FailureReason,omitempty"`
	GenerateCandidateDefinitionsOnly *bool                        `json:"GenerateCandidateDefinitionsOnly,omitempty"`
	InputDataConfig                  []AutoMlChannel              `json:"InputDataConfig"`
	LastModifiedTime                 time.Time                    `json:"LastModifiedTime"`
	ModelDeployConfig                *ModelDeployConfig           `json:"ModelDeployConfig,omitempty"`
	ModelDeployResult                *ModelDeployResult           `json:"ModelDeployResult,omitempty"`
	OutputDataConfig                 AutoMlOutputDataConfig       `json:"OutputDataConfig"`
	PartialFailureReasons            []AutoMlPartialFailureReason `json:"PartialFailureReasons,omitempty"`
	ProblemType                      *ProblemTypeEnum             `json:"ProblemType,omitempty"`
	ResolvedAttributes               *ResolvedAttributes          `json:"ResolvedAttributes,omitempty"`
	RoleArn                          string                       `json:"RoleArn"`
}
