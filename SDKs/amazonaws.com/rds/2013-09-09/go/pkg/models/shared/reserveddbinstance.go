package shared

import (
	"time"
)

type ReservedDbInstance struct {
	CurrencyCode                  *string
	DBInstanceClass               *string
	DBInstanceCount               *int64
	Duration                      *int64
	FixedPrice                    *float64
	MultiAZ                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []map[string]interface{}
	ReservedDBInstanceID          *string
	ReservedDBInstancesOfferingID *string
	StartTime                     *time.Time
	State                         *string
	UsagePrice                    *float64
}
