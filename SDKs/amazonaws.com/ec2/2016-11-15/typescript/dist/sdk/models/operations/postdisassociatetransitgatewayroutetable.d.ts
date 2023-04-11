import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateTransitGatewayRouteTableActionEnum {
    DisassociateTransitGatewayRouteTable = "DisassociateTransitGatewayRouteTable"
}
export declare enum POSTDisassociateTransitGatewayRouteTableVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateTransitGatewayRouteTableRequest extends SpeakeasyBase {
    action: POSTDisassociateTransitGatewayRouteTableActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateTransitGatewayRouteTableVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateTransitGatewayRouteTableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
