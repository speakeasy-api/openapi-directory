package shared

import (
	"time"
)

// OfferingStatus1
// The status of the offering.
type OfferingStatus1 struct {
	EffectiveOn *time.Time             `json:"effectiveOn,omitempty"`
	Offering    *Offering              `json:"offering,omitempty"`
	Quantity    *int64                 `json:"quantity,omitempty"`
	Type        map[string]interface{} `json:"type,omitempty"`
}
