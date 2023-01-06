package shared

import (
	"time"
)

// OfferingTransaction1
// Represents the metadata of an offering transaction.
type OfferingTransaction1 struct {
	Cost                *MonetaryAmount  `json:"cost,omitempty"`
	CreatedOn           *time.Time       `json:"createdOn,omitempty"`
	OfferingPromotionID *string          `json:"offeringPromotionId,omitempty"`
	OfferingStatus      *OfferingStatus1 `json:"offeringStatus,omitempty"`
	TransactionID       *string          `json:"transactionId,omitempty"`
}
