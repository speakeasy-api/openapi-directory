import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for a sequence store.
 */
export declare class ListSequenceStoresRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    name?: string;
}
export declare class ListSequenceStoresRequestBody extends SpeakeasyBase {
    /**
     * A filter for a sequence store.
     */
    filter?: ListSequenceStoresRequestBodyFilter;
}
export declare class ListSequenceStoresRequest extends SpeakeasyBase {
    requestBody: ListSequenceStoresRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of stores to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
}
export declare class ListSequenceStoresResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listSequenceStoresResponse?: shared.ListSequenceStoresResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
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
