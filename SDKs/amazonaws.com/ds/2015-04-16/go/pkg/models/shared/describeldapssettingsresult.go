package shared

type DescribeLdapsSettingsResult struct {
	LDAPSSettingsInfo []LdapsSettingInfo `json:"LDAPSSettingsInfo,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
