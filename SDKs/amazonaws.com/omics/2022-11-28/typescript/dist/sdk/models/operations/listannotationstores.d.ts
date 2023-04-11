import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for annotation stores.
 */
export declare class ListAnnotationStoresRequestBodyFilter extends SpeakeasyBase {
    status?: shared.StoreStatusEnum;
}
export declare class ListAnnotationStoresRequestBody extends SpeakeasyBase {
    /**
     * A filter for annotation stores.
     */
    filter?: ListAnnotationStoresRequestBodyFilter;
    /**
     * IDs of stores to list.
     */
    ids?: string[];
}
export declare class ListAnnotationStoresRequest extends SpeakeasyBase {
    requestBody: ListAnnotationStoresRequestBody;
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
export declare class ListAnnotationStoresResponse extends SpeakeasyBase {
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
    listAnnotationStoresResponse?: shared.ListAnnotationStoresResponse;
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
