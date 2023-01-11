import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile
/** 
 * The IAM instance profile.
**/
export class DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
  @SpeakeasyMetadata()
  arn?: Record<string, any>;

  @SpeakeasyMetadata()
  id?: Record<string, any>;
}


// DisassociateIamInstanceProfileResultIamInstanceProfileAssociation
/** 
 * Information about the IAM instance profile association.
**/
export class DisassociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  iamInstanceProfile?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  timestamp?: Record<string, any>;
}


export class DisassociateIamInstanceProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  iamInstanceProfileAssociation?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
