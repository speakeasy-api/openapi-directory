import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateNetworkInsightsAccessScopeActionEnum {
    CreateNetworkInsightsAccessScope = "CreateNetworkInsightsAccessScope"
}
export declare enum POSTCreateNetworkInsightsAccessScopeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateNetworkInsightsAccessScopeRequest extends SpeakeasyBase {
    action: POSTCreateNetworkInsightsAccessScopeActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateNetworkInsightsAccessScopeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateNetworkInsightsAccessScopeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
