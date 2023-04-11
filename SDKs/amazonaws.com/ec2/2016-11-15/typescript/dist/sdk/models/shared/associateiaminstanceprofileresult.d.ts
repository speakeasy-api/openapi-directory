import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
 */
export declare class AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    id?: string;
}
/**
 * The state of the association.
 */
export declare enum AssociateIamInstanceProfileResultIamInstanceProfileAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Information about the IAM instance profile association.
 */
export declare class AssociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: string;
    iamInstanceProfile?: AssociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: string;
    state?: AssociateIamInstanceProfileResultIamInstanceProfileAssociationStateEnum;
    timestamp?: Date;
}
/**
 * Success
 */
export declare class AssociateIamInstanceProfileResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: AssociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
