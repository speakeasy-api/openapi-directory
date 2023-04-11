import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeImageAttributeActionEnum {
    DescribeImageAttribute = "DescribeImageAttribute"
}
/**
 * <p>The AMI attribute.</p> <p> <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated. Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
 */
export declare enum GETDescribeImageAttributeAttributeEnum {
    Description = "description",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    LaunchPermission = "launchPermission",
    ProductCodes = "productCodes",
    BlockDeviceMapping = "blockDeviceMapping",
    SriovNetSupport = "sriovNetSupport",
    BootMode = "bootMode",
    TpmSupport = "tpmSupport",
    UefiData = "uefiData",
    LastLaunchedTime = "lastLaunchedTime",
    ImdsSupport = "imdsSupport"
}
export declare enum GETDescribeImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeImageAttributeRequest extends SpeakeasyBase {
    action: GETDescribeImageAttributeActionEnum;
    /**
     * <p>The AMI attribute.</p> <p> <b>Note</b>: The <code>blockDeviceMapping</code> attribute is deprecated. Using this attribute returns the <code>Client.AuthFailure</code> error. To get information about the block device mappings for an AMI, use the <a>DescribeImages</a> action.</p>
     */
    attribute: GETDescribeImageAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the AMI.
     */
    imageId: string;
    version: GETDescribeImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeImageAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
