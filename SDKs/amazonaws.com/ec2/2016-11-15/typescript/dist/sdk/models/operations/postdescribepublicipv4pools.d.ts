import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribePublicIpv4PoolsActionEnum {
    DescribePublicIpv4Pools = "DescribePublicIpv4Pools"
}
export declare enum POSTDescribePublicIpv4PoolsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribePublicIpv4PoolsRequest extends SpeakeasyBase {
    action: POSTDescribePublicIpv4PoolsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribePublicIpv4PoolsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribePublicIpv4PoolsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
