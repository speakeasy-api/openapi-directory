import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The IAM instance profile.
 */
export declare class DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociationsIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    id?: string;
}
/**
 * The state of the association.
 */
export declare enum DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociationsStateEnum {
    Associating = "associating",
    Associated = "associated",
    Disassociating = "disassociating",
    Disassociated = "disassociated"
}
/**
 * Describes an association between an IAM instance profile and an instance.
 */
export declare class DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociations extends SpeakeasyBase {
    associationId?: string;
    iamInstanceProfile?: DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociationsIamInstanceProfile;
    instanceId?: string;
    state?: DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociationsStateEnum;
    timestamp?: Date;
}
/**
 * Success
 */
export declare class DescribeIamInstanceProfileAssociationsResult extends SpeakeasyBase {
    iamInstanceProfileAssociations?: DescribeIamInstanceProfileAssociationsResultIamInstanceProfileAssociations[];
    nextToken?: string;
}
