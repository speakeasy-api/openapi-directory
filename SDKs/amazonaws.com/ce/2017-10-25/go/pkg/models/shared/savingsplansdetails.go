package shared

// SavingsPlansDetails
// The attribute details on a specific Savings Plan.
type SavingsPlansDetails struct {
	InstanceFamily *string `json:"InstanceFamily,omitempty"`
	OfferingID     *string `json:"OfferingId,omitempty"`
	Region         *string `json:"Region,omitempty"`
}
