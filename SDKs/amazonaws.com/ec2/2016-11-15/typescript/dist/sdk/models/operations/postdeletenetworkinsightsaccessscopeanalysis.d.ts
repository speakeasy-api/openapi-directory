import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteNetworkInsightsAccessScopeAnalysisActionEnum {
    DeleteNetworkInsightsAccessScopeAnalysis = "DeleteNetworkInsightsAccessScopeAnalysis"
}
export declare enum POSTDeleteNetworkInsightsAccessScopeAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteNetworkInsightsAccessScopeAnalysisRequest extends SpeakeasyBase {
    action: POSTDeleteNetworkInsightsAccessScopeAnalysisActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteNetworkInsightsAccessScopeAnalysisVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteNetworkInsightsAccessScopeAnalysisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
