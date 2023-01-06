package shared

type DescribeMailboxExportJobRequest struct {
	JobID          string                 `json:"JobId"`
	OrganizationID map[string]interface{} `json:"OrganizationId"`
}
