// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// CreateArchiveResponse - Success
type CreateArchiveResponse struct {
	ArchiveArn   *string           `json:"ArchiveArn,omitempty"`
	CreationTime *time.Time        `json:"CreationTime,omitempty"`
	State        *ArchiveStateEnum `json:"State,omitempty"`
	StateReason  *string           `json:"StateReason,omitempty"`
}
