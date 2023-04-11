import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListQueuesActionEnum {
    ListQueues = "ListQueues"
}
export declare enum POSTListQueuesVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class POSTListQueuesRequest extends SpeakeasyBase {
    action: POSTListQueuesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListQueuesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListQueuesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
