package shared

// OrderableClusterOptionsList
// Describes an orderable cluster option.
type OrderableClusterOptionsList struct {
	AvailabilityZones []AvailabilityZoneList
	ClusterType       *string
	ClusterVersion    *string
	NodeType          *string
}
