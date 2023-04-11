import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEventTypesRequestBody extends SpeakeasyBase {
    /**
     * The filters to use to return information by service or resource type.
     */
    filters?: shared.ListEventTypesFilter[];
    /**
     * A non-negative integer used to limit the number of returned results. The default number is 50. The maximum number of results that can be returned is 100.
     */
    maxResults?: number;
    /**
     * An enumeration token that, when provided in a request, returns the next batch of the results.
     */
    nextToken?: string;
}
export declare class ListEventTypesRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListEventTypesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEventTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listEventTypesResult?: shared.ListEventTypesResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
