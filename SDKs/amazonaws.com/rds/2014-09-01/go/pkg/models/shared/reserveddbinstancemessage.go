package shared

type ReservedDbInstanceMessage struct {
	Marker              *string
	ReservedDBInstances []ReservedDbInstanceList
}
