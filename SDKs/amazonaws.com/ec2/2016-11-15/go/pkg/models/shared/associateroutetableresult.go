package shared

// AssociateRouteTableResultAssociationState
// The state of the association.
type AssociateRouteTableResultAssociationState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type AssociateRouteTableResult struct {
	AssociationID    map[string]interface{}
	AssociationState *AssociateRouteTableResultAssociationState
}
