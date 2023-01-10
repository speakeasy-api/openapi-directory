package shared

// ReservedDbInstancesOfferingList
//
//	This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.
type ReservedDbInstancesOfferingList struct {
	CurrencyCode                  *string
	DBInstanceClass               *string
	Duration                      *int64
	FixedPrice                    *float64
	MultiAZ                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []RecurringChargeList
	ReservedDBInstancesOfferingID *string
	UsagePrice                    *float64
}
