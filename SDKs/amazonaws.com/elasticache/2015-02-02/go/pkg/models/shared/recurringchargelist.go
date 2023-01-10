package shared

// RecurringChargeList
// Contains the specific price and frequency of a recurring charges for a reserved cache node, or for a reserved cache node offering.
type RecurringChargeList struct {
	RecurringChargeAmount    *float64
	RecurringChargeFrequency *string
}
