package shared

import (
	"time"
)

// PatchComplianceData
// Information about the state of a patch on a particular instance as it relates to the patch baseline used to patch the instance.
type PatchComplianceData struct {
	CVEIds         *string                      `json:"CVEIds,omitempty"`
	Classification string                       `json:"Classification"`
	InstalledTime  time.Time                    `json:"InstalledTime"`
	KBID           string                       `json:"KBId"`
	Severity       string                       `json:"Severity"`
	State          PatchComplianceDataStateEnum `json:"State"`
	Title          string                       `json:"Title"`
}
