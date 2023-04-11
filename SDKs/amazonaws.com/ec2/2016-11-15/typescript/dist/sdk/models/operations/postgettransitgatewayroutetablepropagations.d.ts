import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTransitGatewayRouteTablePropagationsActionEnum {
    GetTransitGatewayRouteTablePropagations = "GetTransitGatewayRouteTablePropagations"
}
export declare enum POSTGetTransitGatewayRouteTablePropagationsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetTransitGatewayRouteTablePropagationsRequest extends SpeakeasyBase {
    action: POSTGetTransitGatewayRouteTablePropagationsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetTransitGatewayRouteTablePropagationsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTransitGatewayRouteTablePropagationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
