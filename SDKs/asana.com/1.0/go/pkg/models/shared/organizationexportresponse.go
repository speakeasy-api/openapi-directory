package shared

import (
	"time"
)

type OrganizationExportResponseStateEnum string

const (
	OrganizationExportResponseStateEnumPending  OrganizationExportResponseStateEnum = "pending"
	OrganizationExportResponseStateEnumStarted  OrganizationExportResponseStateEnum = "started"
	OrganizationExportResponseStateEnumFinished OrganizationExportResponseStateEnum = "finished"
	OrganizationExportResponseStateEnumError    OrganizationExportResponseStateEnum = "error"
)

// OrganizationExportResponse
// An *organization_export* object represents a request to export the complete data of an Organization in JSON format.
type OrganizationExportResponse struct {
	CreatedAt    *time.Time                           `json:"created_at,omitempty"`
	DownloadURL  *string                              `json:"download_url,omitempty"`
	Organization *WorkspaceCompact                    `json:"organization,omitempty"`
	State        *OrganizationExportResponseStateEnum `json:"state,omitempty"`
}
