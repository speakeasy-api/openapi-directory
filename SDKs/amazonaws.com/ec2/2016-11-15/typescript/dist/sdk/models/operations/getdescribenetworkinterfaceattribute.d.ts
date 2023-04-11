import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeNetworkInterfaceAttributeActionEnum {
    DescribeNetworkInterfaceAttribute = "DescribeNetworkInterfaceAttribute"
}
/**
 * The attribute of the network interface. This parameter is required.
 */
export declare enum GETDescribeNetworkInterfaceAttributeAttributeEnum {
    Description = "description",
    GroupSet = "groupSet",
    SourceDestCheck = "sourceDestCheck",
    Attachment = "attachment"
}
export declare enum GETDescribeNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    action: GETDescribeNetworkInterfaceAttributeActionEnum;
    /**
     * The attribute of the network interface. This parameter is required.
     */
    attribute?: GETDescribeNetworkInterfaceAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the network interface.
     */
    networkInterfaceId: string;
    version: GETDescribeNetworkInterfaceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
