import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTraceGraphRequestBody extends SpeakeasyBase {
    /**
     * Pagination token.
     */
    nextToken?: string;
    /**
     * Trace IDs of requests for which to generate a service graph.
     */
    traceIds: string[];
}
export declare class GetTraceGraphRequest extends SpeakeasyBase {
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetTraceGraphRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTraceGraphResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getTraceGraphResult?: shared.GetTraceGraphResult;
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
