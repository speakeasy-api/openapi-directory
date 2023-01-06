package shared

// OrderableDbInstanceOptionsMessage
// Represents the output of <a>DescribeOrderableDBInstanceOptions</a>.
type OrderableDbInstanceOptionsMessage struct {
	Marker                     map[string]interface{}
	OrderableDBInstanceOptions []map[string]interface{}
}
