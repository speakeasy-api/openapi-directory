// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// DescribeFleetMetadataResponse - Success
type DescribeFleetMetadataResponse struct {
	CompanyCode                *string           `json:"CompanyCode,omitempty"`
	CreatedTime                *time.Time        `json:"CreatedTime,omitempty"`
	DisplayName                *string           `json:"DisplayName,omitempty"`
	FleetName                  *string           `json:"FleetName,omitempty"`
	FleetStatus                *FleetStatusEnum  `json:"FleetStatus,omitempty"`
	LastUpdatedTime            *time.Time        `json:"LastUpdatedTime,omitempty"`
	OptimizeForEndUserLocation *bool             `json:"OptimizeForEndUserLocation,omitempty"`
	Tags                       map[string]string `json:"Tags,omitempty"`
}
