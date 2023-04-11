import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteNetworkInsightsAccessScopeActionEnum {
    DeleteNetworkInsightsAccessScope = "DeleteNetworkInsightsAccessScope"
}
export declare enum POSTDeleteNetworkInsightsAccessScopeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteNetworkInsightsAccessScopeRequest extends SpeakeasyBase {
    action: POSTDeleteNetworkInsightsAccessScopeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteNetworkInsightsAccessScopeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteNetworkInsightsAccessScopeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
