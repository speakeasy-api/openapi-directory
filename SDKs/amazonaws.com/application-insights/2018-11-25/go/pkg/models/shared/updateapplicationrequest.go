package shared

type UpdateApplicationRequest struct {
	CWEMonitorEnabled  *bool   `json:"CWEMonitorEnabled,omitempty"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled,omitempty"`
	OpsItemSNSTopicArn *string `json:"OpsItemSNSTopicArn,omitempty"`
	RemoveSNSTopic     *bool   `json:"RemoveSNSTopic,omitempty"`
	ResourceGroupName  string  `json:"ResourceGroupName"`
}
