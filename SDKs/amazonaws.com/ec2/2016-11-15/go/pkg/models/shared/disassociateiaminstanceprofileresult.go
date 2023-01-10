package shared

// DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
// The IAM instance profile.
type DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile struct {
	Arn map[string]interface{}
	ID  map[string]interface{}
}

// DisassociateIamInstanceProfileResultIamInstanceProfileAssociation
// Information about the IAM instance profile association.
type DisassociateIamInstanceProfileResultIamInstanceProfileAssociation struct {
	AssociationID      map[string]interface{}
	IamInstanceProfile *DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
	InstanceID         map[string]interface{}
	State              map[string]interface{}
	Timestamp          map[string]interface{}
}

type DisassociateIamInstanceProfileResult struct {
	IamInstanceProfileAssociation *DisassociateIamInstanceProfileResultIamInstanceProfileAssociation
}
