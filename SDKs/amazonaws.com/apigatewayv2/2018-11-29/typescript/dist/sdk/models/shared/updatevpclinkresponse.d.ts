import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the VPC link.
 */
export declare enum UpdateVpcLinkResponseVpcLinkStatusEnum {
    Pending = "PENDING",
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Failed = "FAILED",
    Inactive = "INACTIVE"
}
/**
 * The version of the VPC link.
 */
export declare enum UpdateVpcLinkResponseVpcLinkVersionEnum {
    V2 = "V2"
}
/**
 * Success
 */
export declare class UpdateVpcLinkResponse extends SpeakeasyBase {
    createdDate?: Date;
    name?: string;
    securityGroupIds?: string[];
    subnetIds?: string[];
    tags?: Record<string, string>;
    vpcLinkId?: string;
    vpcLinkStatus?: UpdateVpcLinkResponseVpcLinkStatusEnum;
    vpcLinkStatusMessage?: string;
    vpcLinkVersion?: UpdateVpcLinkResponseVpcLinkVersionEnum;
}
