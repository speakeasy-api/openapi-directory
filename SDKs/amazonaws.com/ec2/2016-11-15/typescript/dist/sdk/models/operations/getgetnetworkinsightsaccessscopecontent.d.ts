import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETNetworkInsightsAccessScopeContentActionEnum {
    GetNetworkInsightsAccessScopeContent = "GetNetworkInsightsAccessScopeContent"
}
export declare enum GETGETNetworkInsightsAccessScopeContentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETNetworkInsightsAccessScopeContentRequest extends SpeakeasyBase {
    action: GETGETNetworkInsightsAccessScopeContentActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the Network Access Scope.
     */
    networkInsightsAccessScopeId: string;
    version: GETGETNetworkInsightsAccessScopeContentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETNetworkInsightsAccessScopeContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
