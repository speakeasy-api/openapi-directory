import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartNetworkInsightsAccessScopeAnalysisActionEnum {
    StartNetworkInsightsAccessScopeAnalysis = "StartNetworkInsightsAccessScopeAnalysis"
}
export declare enum POSTStartNetworkInsightsAccessScopeAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTStartNetworkInsightsAccessScopeAnalysisRequest extends SpeakeasyBase {
    action: POSTStartNetworkInsightsAccessScopeAnalysisActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartNetworkInsightsAccessScopeAnalysisVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartNetworkInsightsAccessScopeAnalysisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
