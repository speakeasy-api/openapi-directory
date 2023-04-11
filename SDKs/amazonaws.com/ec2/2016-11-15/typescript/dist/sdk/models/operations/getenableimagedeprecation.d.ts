import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnableImageDeprecationActionEnum {
    EnableImageDeprecation = "EnableImageDeprecation"
}
export declare enum GETEnableImageDeprecationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETEnableImageDeprecationRequest extends SpeakeasyBase {
    action: GETEnableImageDeprecationActionEnum;
    /**
     * <p>The date and time to deprecate the AMI, in UTC, in the following format: <i>YYYY</i>-<i>MM</i>-<i>DD</i>T<i>HH</i>:<i>MM</i>:<i>SS</i>Z. If you specify a value for seconds, Amazon EC2 rounds the seconds to the nearest minute.</p> <p>You can’t specify a date in the past. The upper limit for <code>DeprecateAt</code> is 10 years from now, except for public AMIs, where the upper limit is 2 years from the creation date.</p>
     */
    deprecateAt: Date;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the AMI.
     */
    imageId: string;
    version: GETEnableImageDeprecationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnableImageDeprecationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
