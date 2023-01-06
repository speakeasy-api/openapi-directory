package shared

import (
	"time"
)

// ReservedDbInstance
//
//	This data type is used as a response element in the <code>DescribeReservedDBInstances</code> and <code>PurchaseReservedDBInstancesOffering</code> actions.
type ReservedDbInstance struct {
	CurrencyCode                  *string
	DBInstanceClass               *string
	DBInstanceCount               *int64
	Duration                      *int64
	FixedPrice                    *float64
	LeaseID                       *string
	MultiAZ                       *bool
	OfferingType                  *string
	ProductDescription            *string
	RecurringCharges              []map[string]interface{}
	ReservedDBInstanceArn         *string
	ReservedDBInstanceID          *string
	ReservedDBInstancesOfferingID *string
	StartTime                     *time.Time
	State                         *string
	UsagePrice                    *float64
}
