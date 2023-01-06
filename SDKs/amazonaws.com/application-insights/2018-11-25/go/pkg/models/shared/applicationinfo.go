package shared

// ApplicationInfo
// Describes the status of the application.
type ApplicationInfo struct {
	CWEMonitorEnabled  *bool   `json:"CWEMonitorEnabled,omitempty"`
	LifeCycle          *string `json:"LifeCycle,omitempty"`
	OpsCenterEnabled   *bool   `json:"OpsCenterEnabled,omitempty"`
	OpsItemSNSTopicArn *string `json:"OpsItemSNSTopicArn,omitempty"`
	Remarks            *string `json:"Remarks,omitempty"`
	ResourceGroupName  *string `json:"ResourceGroupName,omitempty"`
}
