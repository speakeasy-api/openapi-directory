package shared

import (
	"time"
)

// ReservedDbInstanceList
//
//	This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
type ReservedDbInstanceList struct {
	CurrencyCode                  *string
	DBInstanceClass               *string
	DBInstanceCount               *int64
	Duration                      *int64
	FixedPrice                    *float64
	LeaseID                       *string
	MultiAZ                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []RecurringChargeList
	ReservedDBInstanceArn         *string
	ReservedDBInstanceID          *string
	ReservedDBInstancesOfferingID *string
	StartTime                     *time.Time
	State                         *string
	UsagePrice                    *float64
}
