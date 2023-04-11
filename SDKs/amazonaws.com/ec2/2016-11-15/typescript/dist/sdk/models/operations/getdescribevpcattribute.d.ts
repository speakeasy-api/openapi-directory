import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeVpcAttributeActionEnum {
    DescribeVpcAttribute = "DescribeVpcAttribute"
}
/**
 * The VPC attribute.
 */
export declare enum GETDescribeVpcAttributeAttributeEnum {
    EnableDnsSupport = "enableDnsSupport",
    EnableDnsHostnames = "enableDnsHostnames",
    EnableNetworkAddressUsageMetrics = "enableNetworkAddressUsageMetrics"
}
export declare enum GETDescribeVpcAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeVpcAttributeRequest extends SpeakeasyBase {
    action: GETDescribeVpcAttributeActionEnum;
    /**
     * The VPC attribute.
     */
    attribute: GETDescribeVpcAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETDescribeVpcAttributeVersionEnum;
    /**
     * The ID of the VPC.
     */
    vpcId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeVpcAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
