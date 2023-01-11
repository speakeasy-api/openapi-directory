import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
/** 
 * The IAM instance profile.
**/
export class AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: Record<string, any>;

  @SpeakeasyMetadata()
  id?: Record<string, any>;
}


// AssociateIamInstanceProfileResultIamInstanceProfileAssociation
/** 
 * Information about the IAM instance profile association.
**/
export class AssociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  iamInstanceProfile?: AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  timestamp?: Record<string, any>;
}


export class AssociateIamInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociation?: AssociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
