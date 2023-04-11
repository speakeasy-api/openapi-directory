import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETConsoleScreenshotActionEnum {
    GetConsoleScreenshot = "GetConsoleScreenshot"
}
export declare enum GETGETConsoleScreenshotVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETConsoleScreenshotRequest extends SpeakeasyBase {
    action: GETGETConsoleScreenshotActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    version: GETGETConsoleScreenshotVersionEnum;
    /**
     * When set to <code>true</code>, acts as keystroke input and wakes up an instance that's in standby or "sleep" mode.
     */
    wakeUp?: boolean;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETConsoleScreenshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
