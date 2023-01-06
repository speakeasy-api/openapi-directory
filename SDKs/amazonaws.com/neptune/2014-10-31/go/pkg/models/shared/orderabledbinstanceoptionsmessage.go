package shared

type OrderableDbInstanceOptionsMessage struct {
	Marker                     *string
	OrderableDBInstanceOptions []map[string]interface{}
}
