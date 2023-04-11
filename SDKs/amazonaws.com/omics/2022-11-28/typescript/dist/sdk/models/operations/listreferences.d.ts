import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for references.
 */
export declare class ListReferencesRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    md5?: string;
    name?: string;
}
export declare class ListReferencesRequestBody extends SpeakeasyBase {
    /**
     * A filter for references.
     */
    filter?: ListReferencesRequestBodyFilter;
}
export declare class ListReferencesRequest extends SpeakeasyBase {
    requestBody: ListReferencesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of references to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The references' reference store ID.
     */
    referenceStoreId: string;
}
export declare class ListReferencesResponse extends SpeakeasyBase {
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
    listReferencesResponse?: shared.ListReferencesResponse;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
