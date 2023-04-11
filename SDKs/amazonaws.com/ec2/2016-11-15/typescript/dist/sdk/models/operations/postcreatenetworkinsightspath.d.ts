import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateNetworkInsightsPathActionEnum {
    CreateNetworkInsightsPath = "CreateNetworkInsightsPath"
}
export declare enum POSTCreateNetworkInsightsPathVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateNetworkInsightsPathRequest extends SpeakeasyBase {
    action: POSTCreateNetworkInsightsPathActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateNetworkInsightsPathVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateNetworkInsightsPathResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
