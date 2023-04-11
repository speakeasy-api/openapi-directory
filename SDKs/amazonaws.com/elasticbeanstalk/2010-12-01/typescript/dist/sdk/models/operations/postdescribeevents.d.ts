import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum POSTDescribeEventsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeEventsRequest extends SpeakeasyBase {
    action: POSTDescribeEventsActionEnum;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTDescribeEventsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
