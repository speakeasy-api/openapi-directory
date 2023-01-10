package shared

// ClusterVersionList
// Describes a cluster version, including the parameter group family and description of the version.
type ClusterVersionList struct {
	ClusterParameterGroupFamily *string
	ClusterVersion              *string
	Description                 *string
}
