import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTransitGatewayRouteTableAnnouncementsActionEnum {
    DescribeTransitGatewayRouteTableAnnouncements = "DescribeTransitGatewayRouteTableAnnouncements"
}
export declare enum POSTDescribeTransitGatewayRouteTableAnnouncementsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeTransitGatewayRouteTableAnnouncementsRequest extends SpeakeasyBase {
    action: POSTDescribeTransitGatewayRouteTableAnnouncementsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeTransitGatewayRouteTableAnnouncementsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTransitGatewayRouteTableAnnouncementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
