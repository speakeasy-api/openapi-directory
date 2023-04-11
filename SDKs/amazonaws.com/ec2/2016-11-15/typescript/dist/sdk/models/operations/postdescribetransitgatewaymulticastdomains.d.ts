import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTransitGatewayMulticastDomainsActionEnum {
    DescribeTransitGatewayMulticastDomains = "DescribeTransitGatewayMulticastDomains"
}
export declare enum POSTDescribeTransitGatewayMulticastDomainsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeTransitGatewayMulticastDomainsRequest extends SpeakeasyBase {
    action: POSTDescribeTransitGatewayMulticastDomainsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeTransitGatewayMulticastDomainsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTransitGatewayMulticastDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
