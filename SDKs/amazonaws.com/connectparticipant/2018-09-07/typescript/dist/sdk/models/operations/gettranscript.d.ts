import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition.
 */
export declare enum GetTranscriptRequestBodyScanDirectionEnum {
    Forward = "FORWARD",
    Backward = "BACKWARD"
}
/**
 * The sort order for the records. Default: DESCENDING.
 */
export declare enum GetTranscriptRequestBodySortOrderEnum {
    Descending = "DESCENDING",
    Ascending = "ASCENDING"
}
/**
 * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
 */
export declare class GetTranscriptRequestBodyStartPosition extends SpeakeasyBase {
    absoluteTime?: string;
    id?: string;
    mostRecent?: number;
}
export declare class GetTranscriptRequestBody extends SpeakeasyBase {
    /**
     * The contactId from the current contact chain for which transcript is needed.
     */
    contactId?: string;
    /**
     * The maximum number of results to return in the page. Default: 10.
     */
    maxResults?: number;
    /**
     * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition.
     */
    scanDirection?: GetTranscriptRequestBodyScanDirectionEnum;
    /**
     * The sort order for the records. Default: DESCENDING.
     */
    sortOrder?: GetTranscriptRequestBodySortOrderEnum;
    /**
     * A filtering option for where to start. For example, if you sent 100 messages, start with message 50.
     */
    startPosition?: GetTranscriptRequestBodyStartPosition;
}
export declare class GetTranscriptRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: GetTranscriptRequestBody;
    xAmzAlgorithm?: string;
    /**
     * The authentication token associated with the participant's connection.
     */
    xAmzBearer: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTranscriptResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getTranscriptResponse?: shared.GetTranscriptResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
