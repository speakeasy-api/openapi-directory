package shared

import (
	"time"
)

// SseDescription
// The description of the server-side encryption status on the specified table.
type SseDescription struct {
	InaccessibleEncryptionDateTime *time.Time     `json:"InaccessibleEncryptionDateTime,omitempty"`
	KMSMasterKeyArn                *string        `json:"KMSMasterKeyArn,omitempty"`
	SSEType                        *SseTypeEnum   `json:"SSEType,omitempty"`
	Status                         *SseStatusEnum `json:"Status,omitempty"`
}
