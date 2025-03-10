// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// EnvironmentAccountConnectionSummary - Summary data of an Proton environment account connection resource.
type EnvironmentAccountConnectionSummary struct {
	Arn                  string                                 `json:"arn"`
	ComponentRoleArn     *string                                `json:"componentRoleArn,omitempty"`
	EnvironmentAccountID string                                 `json:"environmentAccountId"`
	EnvironmentName      string                                 `json:"environmentName"`
	ID                   string                                 `json:"id"`
	LastModifiedAt       time.Time                              `json:"lastModifiedAt"`
	ManagementAccountID  string                                 `json:"managementAccountId"`
	RequestedAt          time.Time                              `json:"requestedAt"`
	RoleArn              string                                 `json:"roleArn"`
	Status               EnvironmentAccountConnectionStatusEnum `json:"status"`
}
