import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeInstanceAttributeActionEnum {
    DescribeInstanceAttribute = "DescribeInstanceAttribute"
}
/**
 * <p>The instance attribute.</p> <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
 */
export declare enum GETDescribeInstanceAttributeAttributeEnum {
    InstanceType = "instanceType",
    Kernel = "kernel",
    Ramdisk = "ramdisk",
    UserData = "userData",
    DisableApiTermination = "disableApiTermination",
    InstanceInitiatedShutdownBehavior = "instanceInitiatedShutdownBehavior",
    RootDeviceName = "rootDeviceName",
    BlockDeviceMapping = "blockDeviceMapping",
    ProductCodes = "productCodes",
    SourceDestCheck = "sourceDestCheck",
    GroupSet = "groupSet",
    EbsOptimized = "ebsOptimized",
    SriovNetSupport = "sriovNetSupport",
    EnaSupport = "enaSupport",
    EnclaveOptions = "enclaveOptions",
    DisableApiStop = "disableApiStop"
}
export declare enum GETDescribeInstanceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDescribeInstanceAttributeRequest extends SpeakeasyBase {
    action: GETDescribeInstanceAttributeActionEnum;
    /**
     * <p>The instance attribute.</p> <p>Note: The <code>enaSupport</code> attribute is not supported at this time.</p>
     */
    attribute: GETDescribeInstanceAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    version: GETDescribeInstanceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeInstanceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
