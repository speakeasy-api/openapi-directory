import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelBundleTaskActionEnum {
    CancelBundleTask = "CancelBundleTask"
}
export declare enum GETCancelBundleTaskVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETCancelBundleTaskRequest extends SpeakeasyBase {
    action: GETCancelBundleTaskActionEnum;
    /**
     * The ID of the bundle task.
     */
    bundleId: string;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    version: GETCancelBundleTaskVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCancelBundleTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
