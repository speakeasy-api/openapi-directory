import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackResourceDriftsActionEnum {
    DescribeStackResourceDrifts = "DescribeStackResourceDrifts"
}
export declare enum POSTDescribeStackResourceDriftsVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackResourceDriftsRequest extends SpeakeasyBase {
    action: POSTDescribeStackResourceDriftsActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeStackResourceDriftsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackResourceDriftsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
