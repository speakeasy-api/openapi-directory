import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisableTransitGatewayRouteTablePropagationActionEnum {
    DisableTransitGatewayRouteTablePropagation = "DisableTransitGatewayRouteTablePropagation"
}
export declare enum POSTDisableTransitGatewayRouteTablePropagationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisableTransitGatewayRouteTablePropagationRequest extends SpeakeasyBase {
    action: POSTDisableTransitGatewayRouteTablePropagationActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisableTransitGatewayRouteTablePropagationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisableTransitGatewayRouteTablePropagationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
