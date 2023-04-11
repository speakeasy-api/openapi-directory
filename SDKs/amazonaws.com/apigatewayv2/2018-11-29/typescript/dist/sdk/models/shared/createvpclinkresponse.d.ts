import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the VPC link.
 */
export declare enum CreateVpcLinkResponseVpcLinkStatusEnum {
    Pending = "PENDING",
    Available = "AVAILABLE",
    Deleting = "DELETING",
    Failed = "FAILED",
    Inactive = "INACTIVE"
}
/**
 * The version of the VPC link.
 */
export declare enum CreateVpcLinkResponseVpcLinkVersionEnum {
    V2 = "V2"
}
/**
 * Success
 */
export declare class CreateVpcLinkResponse extends SpeakeasyBase {
    createdDate?: Date;
    name?: string;
    securityGroupIds?: string[];
    subnetIds?: string[];
    tags?: Record<string, string>;
    vpcLinkId?: string;
    vpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatusEnum;
    vpcLinkStatusMessage?: string;
    vpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersionEnum;
}
