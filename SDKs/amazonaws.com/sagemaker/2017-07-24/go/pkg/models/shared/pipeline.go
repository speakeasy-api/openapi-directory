// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// Pipeline - A SageMaker Model Building Pipeline instance.
type Pipeline struct {
	// Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
	CreatedBy    *UserContext `json:"CreatedBy,omitempty"`
	CreationTime *time.Time   `json:"CreationTime,omitempty"`
	// Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
	LastModifiedBy           *UserContext              `json:"LastModifiedBy,omitempty"`
	LastModifiedTime         *time.Time                `json:"LastModifiedTime,omitempty"`
	LastRunTime              *time.Time                `json:"LastRunTime,omitempty"`
	ParallelismConfiguration *ParallelismConfiguration `json:"ParallelismConfiguration,omitempty"`
	PipelineArn              *string                   `json:"PipelineArn,omitempty"`
	PipelineDescription      *string                   `json:"PipelineDescription,omitempty"`
	PipelineDisplayName      *string                   `json:"PipelineDisplayName,omitempty"`
	PipelineName             *string                   `json:"PipelineName,omitempty"`
	PipelineStatus           *PipelineStatusEnum       `json:"PipelineStatus,omitempty"`
	RoleArn                  *string                   `json:"RoleArn,omitempty"`
	Tags                     []Tag                     `json:"Tags,omitempty"`
}
