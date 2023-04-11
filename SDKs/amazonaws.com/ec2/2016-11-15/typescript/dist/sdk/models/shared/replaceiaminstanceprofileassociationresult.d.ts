import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
 */
export declare class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    id?: string;
}
/**
 * The state of the association.
 */
export declare enum ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Information about the IAM instance profile association.
 */
export declare class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: string;
    iamInstanceProfile?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: string;
    state?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationStateEnum;
    timestamp?: Date;
}
/**
 * Success
 */
export declare class ReplaceIamInstanceProfileAssociationResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation;
}
