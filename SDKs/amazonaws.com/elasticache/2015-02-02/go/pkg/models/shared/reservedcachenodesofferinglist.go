package shared

// ReservedCacheNodesOfferingList
// Describes all of the attributes of a reserved cache node offering.
type ReservedCacheNodesOfferingList struct {
	CacheNodeType                *string
	Duration                     *int64
	FixedPrice                   *float64
	OfferingType                 *string
	ProductDescription           *string
	RecurringCharges             []RecurringChargeList
	ReservedCacheNodesOfferingID *string
	UsagePrice                   *float64
}
