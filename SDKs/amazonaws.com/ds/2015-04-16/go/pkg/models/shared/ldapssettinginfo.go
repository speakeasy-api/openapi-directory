package shared

import (
	"time"
)

// LdapsSettingInfo
// Contains general information about the LDAPS settings.
type LdapsSettingInfo struct {
	LDAPSStatus         *LdapsStatusEnum `json:"LDAPSStatus,omitempty"`
	LDAPSStatusReason   *string          `json:"LDAPSStatusReason,omitempty"`
	LastUpdatedDateTime *time.Time       `json:"LastUpdatedDateTime,omitempty"`
}
