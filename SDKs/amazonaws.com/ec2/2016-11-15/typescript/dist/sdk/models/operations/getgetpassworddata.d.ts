import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETPasswordDataActionEnum {
    GetPasswordData = "GetPasswordData"
}
export declare enum GETGETPasswordDataVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETPasswordDataRequest extends SpeakeasyBase {
    action: GETGETPasswordDataActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Windows instance.
     */
    instanceId: string;
    version: GETGETPasswordDataVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETPasswordDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
