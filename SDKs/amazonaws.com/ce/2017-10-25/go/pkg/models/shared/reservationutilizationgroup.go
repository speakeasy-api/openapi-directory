package shared

// ReservationUtilizationGroup
// A group of reservations that share a set of attributes.
type ReservationUtilizationGroup struct {
	Attributes  map[string]string      `json:"Attributes,omitempty"`
	Key         *string                `json:"Key,omitempty"`
	Utilization *ReservationAggregates `json:"Utilization,omitempty"`
	Value       *string                `json:"Value,omitempty"`
}
