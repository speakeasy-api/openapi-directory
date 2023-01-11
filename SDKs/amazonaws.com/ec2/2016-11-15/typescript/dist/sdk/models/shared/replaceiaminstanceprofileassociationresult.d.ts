import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
**/
export declare class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: Record<string, any>;
    id?: Record<string, any>;
}
/**
 * Information about the IAM instance profile association.
**/
export declare class ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation extends SpeakeasyBase {
    associationId?: Record<string, any>;
    iamInstanceProfile?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociationIamInstanceProfile;
    instanceId?: Record<string, any>;
    state?: Record<string, any>;
    timestamp?: Record<string, any>;
}
export declare class ReplaceIamInstanceProfileAssociationResult extends SpeakeasyBase {
    iamInstanceProfileAssociation?: ReplaceIamInstanceProfileAssociationResultIamInstanceProfileAssociation;
}
