import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for read sets.
 */
export declare class ListReadSetsRequestBodyFilter extends SpeakeasyBase {
    createdAfter?: Date;
    createdBefore?: Date;
    name?: string;
    referenceArn?: string;
    status?: shared.ReadSetStatusEnum;
}
export declare class ListReadSetsRequestBody extends SpeakeasyBase {
    /**
     * A filter for read sets.
     */
    filter?: ListReadSetsRequestBodyFilter;
}
export declare class ListReadSetsRequest extends SpeakeasyBase {
    requestBody: ListReadSetsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of read sets to return in one page of results.
     */
    maxResults?: number;
    /**
     * Specify the pagination token from a previous request to retrieve the next page of results.
     */
    nextToken?: string;
    /**
     * The jobs' sequence store ID.
     */
    sequenceStoreId: string;
}
export declare class ListReadSetsResponse extends SpeakeasyBase {
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
    listReadSetsResponse?: shared.ListReadSetsResponse;
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
