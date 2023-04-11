import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchGetTracesRequestBody extends SpeakeasyBase {
    /**
     * Pagination token.
     */
    nextToken?: string;
    /**
     * Specify the trace IDs of requests for which to retrieve segments.
     */
    traceIds: string[];
}
export declare class BatchGetTracesRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: BatchGetTracesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetTracesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetTracesResult?: shared.BatchGetTracesResult;
    contentType: string;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
