import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTransitGatewayPolicyTablesActionEnum {
    DescribeTransitGatewayPolicyTables = "DescribeTransitGatewayPolicyTables"
}
export declare enum POSTDescribeTransitGatewayPolicyTablesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeTransitGatewayPolicyTablesRequest extends SpeakeasyBase {
    action: POSTDescribeTransitGatewayPolicyTablesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeTransitGatewayPolicyTablesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTransitGatewayPolicyTablesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
