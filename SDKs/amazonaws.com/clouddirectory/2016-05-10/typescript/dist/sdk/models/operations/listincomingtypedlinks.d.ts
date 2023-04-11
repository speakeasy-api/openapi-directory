import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The consistency level to execute the request at.
 */
export declare enum ListIncomingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
 */
export declare class ListIncomingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class ListIncomingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListIncomingTypedLinksRequestBody extends SpeakeasyBase {
    /**
     * The consistency level to execute the request at.
     */
    consistencyLevel?: ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    filterAttributeRanges?: shared.TypedLinkAttributeRange[];
    /**
     * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
     */
    filterTypedLink?: ListIncomingTypedLinksRequestBodyFilterTypedLink;
    /**
     * The maximum number of results to retrieve.
     */
    maxResults?: number;
    /**
     * The pagination token.
     */
    nextToken?: string;
    /**
     * The reference that identifies an object.
     */
    objectReference: ListIncomingTypedLinksRequestBodyObjectReference;
}
export declare class ListIncomingTypedLinksRequest extends SpeakeasyBase {
    requestBody: ListIncomingTypedLinksRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to list the typed links.
     */
    xAmzDataPartition: string;
}
export declare class ListIncomingTypedLinksResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: shared.DirectoryNotEnabledException;
    /**
     * FacetValidationException
     */
    facetValidationException?: shared.FacetValidationException;
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
    listIncomingTypedLinksResponse?: shared.ListIncomingTypedLinksResponse;
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
