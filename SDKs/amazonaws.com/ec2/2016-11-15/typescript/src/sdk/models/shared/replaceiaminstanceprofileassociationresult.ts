import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile
/** 
 * The IAM instance profile.
**/
export class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: Record<string, any>;

  @SpeakeasyMetadata()
  id?: Record<string, any>;
}


// ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation
/** 
 * Information about the IAM instance profile association.
**/
export class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  iamInstanceProfile?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  timestamp?: Record<string, any>;
}


export class ReplaceIamInstanceProfileAssociationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociation?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation;
}
