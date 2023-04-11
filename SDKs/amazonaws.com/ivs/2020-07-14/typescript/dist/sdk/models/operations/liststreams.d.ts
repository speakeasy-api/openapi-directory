import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Object specifying the stream attribute on which to filter.
 */
export declare class ListStreamsRequestBodyFilterBy extends SpeakeasyBase {
    health?: shared.StreamHealthEnum;
}
export declare class ListStreamsRequestBody extends SpeakeasyBase {
    /**
     * Object specifying the stream attribute on which to filter.
     */
    filterBy?: ListStreamsRequestBodyFilterBy;
    /**
     * Maximum number of streams to return. Default: 100.
     */
    maxResults?: number;
    /**
     * The first stream to retrieve. This is used for pagination; see the <code>nextToken</code> response field.
     */
    nextToken?: string;
}
export declare class ListStreamsRequest extends SpeakeasyBase {
    requestBody: ListStreamsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListStreamsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    listStreamsResponse?: shared.ListStreamsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
