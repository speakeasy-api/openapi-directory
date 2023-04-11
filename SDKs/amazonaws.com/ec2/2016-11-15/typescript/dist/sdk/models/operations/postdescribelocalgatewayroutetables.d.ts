import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeLocalGatewayRouteTablesActionEnum {
    DescribeLocalGatewayRouteTables = "DescribeLocalGatewayRouteTables"
}
export declare enum POSTDescribeLocalGatewayRouteTablesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeLocalGatewayRouteTablesRequest extends SpeakeasyBase {
    action: POSTDescribeLocalGatewayRouteTablesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeLocalGatewayRouteTablesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeLocalGatewayRouteTablesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
