package shared

// AssociateTrunkInterfaceResultInterfaceAssociation
// Information about the association between the trunk network interface and branch network interface.
type AssociateTrunkInterfaceResultInterfaceAssociation struct {
	AssociationID     map[string]interface{}
	BranchInterfaceID map[string]interface{}
	GreKey            map[string]interface{}
	InterfaceProtocol map[string]interface{}
	Tags              map[string]interface{}
	TrunkInterfaceID  map[string]interface{}
	VlanID            map[string]interface{}
}

type AssociateTrunkInterfaceResult struct {
	ClientToken          map[string]interface{}
	InterfaceAssociation *AssociateTrunkInterfaceResultInterfaceAssociation
}
