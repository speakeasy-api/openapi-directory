package shared

// FailoverState1
// Contains the state of scheduled or in-process failover operations on an Aurora global database (<a>GlobalCluster</a>). This Data type is empty unless a failover operation is scheduled or is currently underway on the Aurora global database.
type FailoverState1 struct {
	FromDbClusterArn *string
	Status           map[string]interface{}
	ToDbClusterArn   *string
}
