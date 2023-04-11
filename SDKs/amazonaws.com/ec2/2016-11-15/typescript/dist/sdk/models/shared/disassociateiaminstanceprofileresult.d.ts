import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
 */
export declare class DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    id?: string;
}
/**
 * The state of the association.
 */
export declare enum DisassociateIamInstanceProfileResultIamInstanceProfileAssociationStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Information about the IAM instance profile association.
 */
export declare class DisassociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: string;
    iamInstanceProfile?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: string;
    state?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociationStateEnum;
    timestamp?: Date;
}
/**
 * Success
 */
export declare class DisassociateIamInstanceProfileResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
