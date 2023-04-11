import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETConsoleOutputActionEnum {
    GetConsoleOutput = "GetConsoleOutput"
}
export declare enum GETGETConsoleOutputVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETConsoleOutputRequest extends SpeakeasyBase {
    action: GETGETConsoleOutputActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    /**
     * <p>When enabled, retrieves the latest console output for the instance.</p> <p>Default: disabled (<code>false</code>)</p>
     */
    latest?: boolean;
    version: GETGETConsoleOutputVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETConsoleOutputResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
