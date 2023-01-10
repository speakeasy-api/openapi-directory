package shared

// ReplaceRouteTableAssociationResultAssociationState
// The state of the association.
type ReplaceRouteTableAssociationResultAssociationState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

type ReplaceRouteTableAssociationResult struct {
	AssociationState *ReplaceRouteTableAssociationResultAssociationState
	NewAssociationID map[string]interface{}
}
