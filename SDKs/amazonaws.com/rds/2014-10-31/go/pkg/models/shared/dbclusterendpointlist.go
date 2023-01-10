package shared

// DbClusterEndpointList
// <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster. This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBClusterEndpoint</code> </p> </li> <li> <p> <code>DescribeDBClusterEndpoints</code> </p> </li> <li> <p> <code>ModifyDBClusterEndpoint</code> </p> </li> <li> <p> <code>DeleteDBClusterEndpoint</code> </p> </li> </ul> <p>For the data structure that represents Amazon RDS DB instance endpoints, see <code>Endpoint</code>.</p>
type DbClusterEndpointList struct {
	CustomEndpointType                  *string
	DBClusterEndpointArn                *string
	DBClusterEndpointIdentifier         *string
	DBClusterEndpointResourceIdentifier *string
	DBClusterIdentifier                 *string
	Endpoint                            *string
	EndpointType                        *string
	ExcludedMembers                     []string
	StaticMembers                       []string
	Status                              *string
}
