package shared

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
