package shared

type CreateApplicationRequest struct {
	CWEMonitorEnabled  *bool   `json:"CWEMonitorEnabled,omitempty"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled,omitempty"`
	OpsItemSNSTopicArn *string `json:"OpsItemSNSTopicArn,omitempty"`
	ResourceGroupName  string  `json:"ResourceGroupName"`
	Tags               []Tag   `json:"Tags,omitempty"`
}
