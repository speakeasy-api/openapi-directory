import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetNetworkInsightsAccessScopeAnalysisFindingsActionEnum {
    GetNetworkInsightsAccessScopeAnalysisFindings = "GetNetworkInsightsAccessScopeAnalysisFindings"
}
export declare enum POSTGetNetworkInsightsAccessScopeAnalysisFindingsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetNetworkInsightsAccessScopeAnalysisFindingsRequest extends SpeakeasyBase {
    action: POSTGetNetworkInsightsAccessScopeAnalysisFindingsActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetNetworkInsightsAccessScopeAnalysisFindingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetNetworkInsightsAccessScopeAnalysisFindingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
