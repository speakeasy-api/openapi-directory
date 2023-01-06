package shared

import (
	"time"
)

// Control1
//
//	A control in Audit Manager.
type Control1 struct {
	ActionPlanInstructions *string                 `json:"actionPlanInstructions,omitempty"`
	ActionPlanTitle        *string                 `json:"actionPlanTitle,omitempty"`
	Arn                    *string                 `json:"arn,omitempty"`
	ControlMappingSources  []ControlMappingSource1 `json:"controlMappingSources,omitempty"`
	ControlSources         *string                 `json:"controlSources,omitempty"`
	CreatedAt              *time.Time              `json:"createdAt,omitempty"`
	CreatedBy              *string                 `json:"createdBy,omitempty"`
	Description            *string                 `json:"description,omitempty"`
	ID                     *string                 `json:"id,omitempty"`
	LastUpdatedAt          *time.Time              `json:"lastUpdatedAt,omitempty"`
	LastUpdatedBy          *string                 `json:"lastUpdatedBy,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	Tags                   map[string]string       `json:"tags,omitempty"`
	TestingInformation     *string                 `json:"testingInformation,omitempty"`
	Type                   *ControlTypeEnum        `json:"type,omitempty"`
}
