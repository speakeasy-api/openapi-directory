import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for reference stores.
 */
export declare class ListReferenceStoresRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    name?: string;
}
export declare class ListReferenceStoresRequestBody extends SpeakeasyBase {
    /**
     * A filter for reference stores.
     */
    filter?: ListReferenceStoresRequestBodyFilter;
}
export declare class ListReferenceStoresRequest extends SpeakeasyBase {
    requestBody: ListReferenceStoresRequestBody;
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
export declare class ListReferenceStoresResponse extends SpeakeasyBase {
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
    listReferenceStoresResponse?: shared.ListReferenceStoresResponse;
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
