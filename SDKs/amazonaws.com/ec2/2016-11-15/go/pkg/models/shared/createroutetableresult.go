package shared

// CreateRouteTableResultRouteTable
// Information about the route table.
type CreateRouteTableResultRouteTable struct {
	Associations    map[string]interface{}
	OwnerID         map[string]interface{}
	PropagatingVgws map[string]interface{}
	RouteTableID    map[string]interface{}
	Routes          map[string]interface{}
	Tags            map[string]interface{}
	VpcID           map[string]interface{}
}

type CreateRouteTableResult struct {
	RouteTable *CreateRouteTableResultRouteTable
}
