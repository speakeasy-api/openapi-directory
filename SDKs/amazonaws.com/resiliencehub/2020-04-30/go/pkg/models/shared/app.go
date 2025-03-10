// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// App - Defines an Resilience Hub application.
type App struct {
	AppArn                            string                         `json:"appArn"`
	AssessmentSchedule                *AppAssessmentScheduleTypeEnum `json:"assessmentSchedule,omitempty"`
	ComplianceStatus                  *AppComplianceStatusTypeEnum   `json:"complianceStatus,omitempty"`
	CreationTime                      time.Time                      `json:"creationTime"`
	Description                       *string                        `json:"description,omitempty"`
	LastAppComplianceEvaluationTime   *time.Time                     `json:"lastAppComplianceEvaluationTime,omitempty"`
	LastResiliencyScoreEvaluationTime *time.Time                     `json:"lastResiliencyScoreEvaluationTime,omitempty"`
	Name                              string                         `json:"name"`
	PolicyArn                         *string                        `json:"policyArn,omitempty"`
	ResiliencyScore                   *float64                       `json:"resiliencyScore,omitempty"`
	Status                            *AppStatusTypeEnum             `json:"status,omitempty"`
	Tags                              map[string]string              `json:"tags,omitempty"`
}
