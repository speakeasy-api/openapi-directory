import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSearchTransitGatewayMulticastGroupsActionEnum {
    SearchTransitGatewayMulticastGroups = "SearchTransitGatewayMulticastGroups"
}
export declare enum POSTSearchTransitGatewayMulticastGroupsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTSearchTransitGatewayMulticastGroupsRequest extends SpeakeasyBase {
    action: POSTSearchTransitGatewayMulticastGroupsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTSearchTransitGatewayMulticastGroupsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSearchTransitGatewayMulticastGroupsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
