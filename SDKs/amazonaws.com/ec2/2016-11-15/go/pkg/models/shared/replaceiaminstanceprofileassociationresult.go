package shared

// ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile
// The IAM instance profile.
type ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile struct {
	Arn map[string]interface{}
	ID  map[string]interface{}
}

// ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation
// Information about the IAM instance profile association.
type ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation struct {
	AssociationID      map[string]interface{}
	IamInstanceProfile *ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile
	InstanceID         map[string]interface{}
	State              map[string]interface{}
	Timestamp          map[string]interface{}
}

type ReplaceIamInstanceProfileAssociationResult struct {
	IamInstanceProfileAssociation *ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation
}
