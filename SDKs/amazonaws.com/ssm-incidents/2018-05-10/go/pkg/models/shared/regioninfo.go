package shared

import (
	"time"
)

type RegionInfo struct {
	SseKmsKeyID          *string           `json:"sseKmsKeyId,omitempty"`
	Status               *RegionStatusEnum `json:"status,omitempty"`
	StatusMessage        *string           `json:"statusMessage,omitempty"`
	StatusUpdateDateTime *time.Time        `json:"statusUpdateDateTime,omitempty"`
}
