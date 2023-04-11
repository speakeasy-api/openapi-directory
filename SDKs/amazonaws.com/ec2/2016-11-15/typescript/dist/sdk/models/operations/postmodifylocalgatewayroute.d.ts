import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyLocalGatewayRouteActionEnum {
    ModifyLocalGatewayRoute = "ModifyLocalGatewayRoute"
}
export declare enum POSTModifyLocalGatewayRouteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyLocalGatewayRouteRequest extends SpeakeasyBase {
    action: POSTModifyLocalGatewayRouteActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyLocalGatewayRouteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyLocalGatewayRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
