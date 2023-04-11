import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a VPC with a security group that references your security group.
 */
export declare class DescribeSecurityGroupReferencesResultSecurityGroupReferenceSet extends SpeakeasyBase {
    groupId?: string;
    referencingVpcId?: string;
    vpcPeeringConnectionId?: string;
}
/**
 * Success
 */
export declare class DescribeSecurityGroupReferencesResult extends SpeakeasyBase {
    securityGroupReferenceSet?: DescribeSecurityGroupReferencesResultSecurityGroupReferenceSet[];
}
