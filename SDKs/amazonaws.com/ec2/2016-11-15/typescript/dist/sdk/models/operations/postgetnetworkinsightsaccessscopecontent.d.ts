import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetNetworkInsightsAccessScopeContentActionEnum {
    GetNetworkInsightsAccessScopeContent = "GetNetworkInsightsAccessScopeContent"
}
export declare enum POSTGetNetworkInsightsAccessScopeContentVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetNetworkInsightsAccessScopeContentRequest extends SpeakeasyBase {
    action: POSTGetNetworkInsightsAccessScopeContentActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetNetworkInsightsAccessScopeContentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetNetworkInsightsAccessScopeContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
