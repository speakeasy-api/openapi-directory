import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTReplaceRouteActionEnum {
    ReplaceRoute = "ReplaceRoute"
}
export declare enum POSTReplaceRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTReplaceRouteRequest extends SpeakeasyBase {
    action: POSTReplaceRouteActionEnum;
    requestBody?: Uint8Array;
    version: POSTReplaceRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTReplaceRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
