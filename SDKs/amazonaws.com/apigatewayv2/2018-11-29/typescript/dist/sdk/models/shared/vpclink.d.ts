import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the VPC link.
 */
export declare enum VpcLinkVpcLinkStatusEnum {
    Pending = "PENDING",
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Failed = "FAILED",
    Inactive = "INACTIVE"
}
/**
 * The version of the VPC link.
 */
export declare enum VpcLinkVpcLinkVersionEnum {
    V2 = "V2"
}
/**
 * Represents a VPC link.
 */
export declare class VpcLink extends SpeakeasyBase {
    createdDate?: Date;
    name: string;
    securityGroupIds: string[];
    subnetIds: string[];
    tags?: Record<string, string>;
    vpcLinkId: string;
    vpcLinkStatus?: VpcLinkVpcLinkStatusEnum;
    vpcLinkStatusMessage?: string;
    vpcLinkVersion?: VpcLinkVpcLinkVersionEnum;
}
