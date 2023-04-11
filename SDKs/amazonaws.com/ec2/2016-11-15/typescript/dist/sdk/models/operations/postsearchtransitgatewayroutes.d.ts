import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSearchTransitGatewayRoutesActionEnum {
    SearchTransitGatewayRoutes = "SearchTransitGatewayRoutes"
}
export declare enum POSTSearchTransitGatewayRoutesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTSearchTransitGatewayRoutesRequest extends SpeakeasyBase {
    action: POSTSearchTransitGatewayRoutesActionEnum;
    requestBody?: Uint8Array;
    version: POSTSearchTransitGatewayRoutesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSearchTransitGatewayRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
