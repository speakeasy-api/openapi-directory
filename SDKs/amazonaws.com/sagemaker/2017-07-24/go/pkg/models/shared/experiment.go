// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// Experiment - The properties of an experiment as returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html">Search</a> API.
type Experiment struct {
	CreatedBy      *UserContext `json:"CreatedBy,omitempty"`
	CreationTime   *time.Time   `json:"CreationTime,omitempty"`
	Description    *string      `json:"Description,omitempty"`
	DisplayName    *string      `json:"DisplayName,omitempty"`
	ExperimentArn  *string      `json:"ExperimentArn,omitempty"`
	ExperimentName *string      `json:"ExperimentName,omitempty"`
	// Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
	LastModifiedBy   *UserContext `json:"LastModifiedBy,omitempty"`
	LastModifiedTime *time.Time   `json:"LastModifiedTime,omitempty"`
	// The source of the experiment.
	Source *ExperimentSource `json:"Source,omitempty"`
	Tags   []Tag             `json:"Tags,omitempty"`
}
