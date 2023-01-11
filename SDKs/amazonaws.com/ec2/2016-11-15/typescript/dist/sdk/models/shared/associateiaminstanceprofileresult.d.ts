import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
**/
export declare class AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: Record<string, any>;
    id?: Record<string, any>;
}
/**
 * Information about the IAM instance profile association.
**/
export declare class AssociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    iamInstanceProfile?: AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: Record<string, any>;
    state?: Record<string, any>;
    timestamp?: Record<string, any>;
}
export declare class AssociateIamInstanceProfileResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: AssociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
