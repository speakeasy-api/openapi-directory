package shared

import (
	"time"
)

// ChangeOrderReporting
// The reporting related to a change order operation
type ChangeOrderReporting struct {
	ChangeOrderType   *string                           `json:"changeOrderType,omitempty"`
	CreationUtcDate   *time.Time                        `json:"creationUtcDate,omitempty"`
	Details           map[string]map[string]interface{} `json:"details,omitempty"`
	ErrorMessage      *string                           `json:"errorMessage,omitempty"`
	ExecutionUUID     *string                           `json:"executionUUID,omitempty"`
	IPAddress         *string                           `json:"ipAddress,omitempty"`
	LastUpdateUtcDate *time.Time                        `json:"lastUpdateUtcDate,omitempty"`
	ProcessingStatus  *string                           `json:"processingStatus,omitempty"`
	SourceType        *SourceTypeEnum                   `json:"sourceType,omitempty"`
	SourceUserID      *string                           `json:"sourceUserId,omitempty"`
	SourceUserName    *string                           `json:"sourceUserName,omitempty"`
	TestMode          *bool                             `json:"testMode,omitempty"`
}
