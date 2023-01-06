package shared

type DbClusterCapacityInfo struct {
	CurrentCapacity      *int64
	DBClusterIdentifier  *string
	PendingCapacity      *int64
	SecondsBeforeTimeout *int64
	TimeoutAction        *string
}
