package shared

import (
	"time"
)

type UpdateExpirationForHitRequest struct {
	ExpireAt time.Time `json:"ExpireAt"`
	HITID    string    `json:"HITId"`
}
