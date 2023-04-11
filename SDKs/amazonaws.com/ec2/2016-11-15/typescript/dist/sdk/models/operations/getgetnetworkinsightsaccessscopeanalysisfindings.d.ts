import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETNetworkInsightsAccessScopeAnalysisFindingsActionEnum {
    GetNetworkInsightsAccessScopeAnalysisFindings = "GetNetworkInsightsAccessScopeAnalysisFindings"
}
export declare enum GETGETNetworkInsightsAccessScopeAnalysisFindingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETGETNetworkInsightsAccessScopeAnalysisFindingsRequest extends SpeakeasyBase {
    action: GETGETNetworkInsightsAccessScopeAnalysisFindingsActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
     */
    maxResults?: number;
    /**
     * The ID of the Network Access Scope analysis.
     */
    networkInsightsAccessScopeAnalysisId: string;
    /**
     * The token for the next page of results.
     */
    nextToken?: string;
    version: GETGETNetworkInsightsAccessScopeAnalysisFindingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETNetworkInsightsAccessScopeAnalysisFindingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
