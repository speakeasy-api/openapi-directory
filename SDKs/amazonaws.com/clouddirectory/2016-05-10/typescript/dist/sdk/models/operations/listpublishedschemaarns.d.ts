import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPublishedSchemaArnsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of results to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The response for <code>ListPublishedSchemaArns</code> when this parameter is used will list all minor version ARNs for a major version.
     */
    schemaArn?: string;
}
export declare class ListPublishedSchemaArnsRequest extends SpeakeasyBase {
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody: ListPublishedSchemaArnsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPublishedSchemaArnsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: shared.InternalServiceException;
    /**
     * InvalidArnException
     */
    invalidArnException?: shared.InvalidArnException;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: shared.InvalidNextTokenException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * Success
     */
    listPublishedSchemaArnsResponse?: shared.ListPublishedSchemaArnsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
