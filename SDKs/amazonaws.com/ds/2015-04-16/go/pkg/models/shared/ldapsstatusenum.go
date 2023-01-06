package shared

type LdapsStatusEnum string

const (
	LDAPSStatusEnumEnabling     LdapsStatusEnum = "Enabling"
	LDAPSStatusEnumEnabled      LdapsStatusEnum = "Enabled"
	LDAPSStatusEnumEnableFailed LdapsStatusEnum = "EnableFailed"
	LDAPSStatusEnumDisabled     LdapsStatusEnum = "Disabled"
)
