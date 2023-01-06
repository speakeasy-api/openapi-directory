package shared

import (
	"time"
)

type ActivateSubscriptionRequest struct {
	RecoverBeginPeriodOrderLastModificationUtcDate *time.Time `json:"recoverBeginPeriodOrderLastModificationUtcDate,omitempty"`
	RecoverEndPeriodOrderLastModificationUtcDate   *time.Time `json:"recoverEndPeriodOrderLastModificationUtcDate,omitempty"`
}
