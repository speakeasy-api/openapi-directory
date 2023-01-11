import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
**/
export declare class DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: Record<string, any>;
    id?: Record<string, any>;
}
/**
 * Information about the IAM instance profile association.
**/
export declare class DisassociateIamInstanceProfileResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    iamInstanceProfile?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: Record<string, any>;
    state?: Record<string, any>;
    timestamp?: Record<string, any>;
}
export declare class DisassociateIamInstanceProfileResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: DisassociateIamInstanceProfileResultIamInstanceProfileAssociation;
}
