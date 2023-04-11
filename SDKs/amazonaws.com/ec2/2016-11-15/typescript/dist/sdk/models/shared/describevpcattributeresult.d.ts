import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates whether the instances launched in the VPC get DNS hostnames. If this attribute is <code>true</code>, instances in the VPC get DNS hostnames; otherwise, they do not.
 */
export declare class DescribeVpcAttributeResultEnableDnsHostnames extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Indicates whether DNS resolution is enabled for the VPC. If this attribute is <code>true</code>, the Amazon DNS server resolves DNS hostnames for your instances to their corresponding IP addresses; otherwise, it does not.
 */
export declare class DescribeVpcAttributeResultEnableDnsSupport extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Indicates whether Network Address Usage metrics are enabled for your VPC.
 */
export declare class DescribeVpcAttributeResultEnableNetworkAddressUsageMetrics extends SpeakeasyBase {
    value?: boolean;
}
/**
 * Success
 */
export declare class DescribeVpcAttributeResult extends SpeakeasyBase {
    enableDnsHostnames?: DescribeVpcAttributeResultEnableDnsHostnames;
    enableDnsSupport?: DescribeVpcAttributeResultEnableDnsSupport;
    enableNetworkAddressUsageMetrics?: DescribeVpcAttributeResultEnableNetworkAddressUsageMetrics;
    vpcId?: string;
}
