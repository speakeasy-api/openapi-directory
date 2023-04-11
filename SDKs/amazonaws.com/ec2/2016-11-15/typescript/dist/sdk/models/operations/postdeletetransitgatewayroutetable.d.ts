import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteTransitGatewayRouteTableActionEnum {
    DeleteTransitGatewayRouteTable = "DeleteTransitGatewayRouteTable"
}
export declare enum POSTDeleteTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteTransitGatewayRouteTableRequest extends SpeakeasyBase {
    action: POSTDeleteTransitGatewayRouteTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteTransitGatewayRouteTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
