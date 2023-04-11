import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTStartNetworkInsightsAnalysisActionEnum {
    StartNetworkInsightsAnalysis = "StartNetworkInsightsAnalysis"
}
export declare enum POSTStartNetworkInsightsAnalysisVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTStartNetworkInsightsAnalysisRequest extends SpeakeasyBase {
    action: POSTStartNetworkInsightsAnalysisActionEnum;
    requestBody?: Uint8Array;
    version: POSTStartNetworkInsightsAnalysisVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTStartNetworkInsightsAnalysisResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
