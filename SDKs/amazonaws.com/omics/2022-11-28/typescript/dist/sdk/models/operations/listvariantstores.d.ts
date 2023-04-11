import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for variant stores.
 */
export declare class ListVariantStoresRequestBodyFilter extends SpeakeasyBase {
    status?: shared.StoreStatusEnum;
}
export declare class ListVariantStoresRequestBody extends SpeakeasyBase {
    /**
     * A filter for variant stores.
     */
    filter?: ListVariantStoresRequestBodyFilter;
    /**
     * A list of store IDs.
     */
    ids?: string[];
}
export declare class ListVariantStoresRequest extends SpeakeasyBase {
    requestBody: ListVariantStoresRequestBody;
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
export declare class ListVariantStoresResponse extends SpeakeasyBase {
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
    listVariantStoresResponse?: shared.ListVariantStoresResponse;
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
