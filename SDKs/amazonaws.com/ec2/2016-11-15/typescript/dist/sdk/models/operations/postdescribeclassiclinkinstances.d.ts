import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeClassicLinkInstancesActionEnum {
    DescribeClassicLinkInstances = "DescribeClassicLinkInstances"
}
export declare enum POSTDescribeClassicLinkInstancesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeClassicLinkInstancesRequest extends SpeakeasyBase {
    action: POSTDescribeClassicLinkInstancesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeClassicLinkInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeClassicLinkInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
