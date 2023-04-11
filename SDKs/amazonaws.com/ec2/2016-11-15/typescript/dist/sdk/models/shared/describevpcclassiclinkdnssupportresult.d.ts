import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the ClassicLink DNS support status of a VPC.
 */
export declare class DescribeVpcClassicLinkDnsSupportResultVpcs extends SpeakeasyBase {
    classicLinkDnsSupported?: boolean;
    vpcId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcClassicLinkDnsSupportResult extends SpeakeasyBase {
    nextToken?: string;
    vpcs?: DescribeVpcClassicLinkDnsSupportResultVpcs[];
}
