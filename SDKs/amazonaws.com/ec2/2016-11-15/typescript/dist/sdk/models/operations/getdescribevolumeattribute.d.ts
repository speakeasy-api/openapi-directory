import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeVolumeAttributeActionEnum {
    DescribeVolumeAttribute = "DescribeVolumeAttribute"
}
/**
 * The attribute of the volume. This parameter is required.
 */
export declare enum GETDescribeVolumeAttributeAttributeEnum {
    AutoEnableIO = "autoEnableIO",
    ProductCodes = "productCodes"
}
export declare enum GETDescribeVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeVolumeAttributeRequest extends SpeakeasyBase {
    action: GETDescribeVolumeAttributeActionEnum;
    /**
     * The attribute of the volume. This parameter is required.
     */
    attribute: GETDescribeVolumeAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETDescribeVolumeAttributeVersionEnum;
    /**
     * The ID of the volume.
     */
    volumeId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeVolumeAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
