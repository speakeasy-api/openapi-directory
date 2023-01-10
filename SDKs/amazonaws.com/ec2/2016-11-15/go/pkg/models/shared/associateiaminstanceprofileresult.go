package shared

// AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
// The IAM instance profile.
type AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile struct {
	Arn map[string]interface{}
	ID  map[string]interface{}
}

// AssociateIamInstanceProfileResultIamInstanceProfileAssociation
// Information about the IAM instance profile association.
type AssociateIamInstanceProfileResultIamInstanceProfileAssociation struct {
	AssociationID      map[string]interface{}
	IamInstanceProfile *AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
	InstanceID         map[string]interface{}
	State              map[string]interface{}
	Timestamp          map[string]interface{}
}

type AssociateIamInstanceProfileResult struct {
	IamInstanceProfileAssociation *AssociateIamInstanceProfileResultIamInstanceProfileAssociation
}
