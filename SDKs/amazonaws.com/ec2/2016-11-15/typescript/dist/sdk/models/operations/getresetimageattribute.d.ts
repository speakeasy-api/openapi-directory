import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETResetImageAttributeActionEnum {
    ResetImageAttribute = "ResetImageAttribute"
}
/**
 * The attribute to reset (currently you can only reset the launch permission attribute).
 */
export declare enum GETResetImageAttributeAttributeEnum {
    LaunchPermission = "launchPermission"
}
export declare enum GETResetImageAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETResetImageAttributeRequest extends SpeakeasyBase {
    action: GETResetImageAttributeActionEnum;
    /**
     * The attribute to reset (currently you can only reset the launch permission attribute).
     */
    attribute: GETResetImageAttributeAttributeEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the AMI.
     */
    imageId: string;
    version: GETResetImageAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETResetImageAttributeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
