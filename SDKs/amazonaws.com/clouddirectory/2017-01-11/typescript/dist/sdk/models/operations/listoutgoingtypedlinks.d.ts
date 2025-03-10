import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The consistency level to execute the request at.
 */
export declare enum ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum {
    Serializable = "SERIALIZABLE",
    Eventual = "EVENTUAL"
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
 */
export declare class ListOutgoingTypedLinksRequestBodyFilterTypedLink extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class ListOutgoingTypedLinksRequestBodyObjectReference extends SpeakeasyBase {
    selector?: string;
}
export declare class ListOutgoingTypedLinksRequestBody extends SpeakeasyBase {
    /**
     * The consistency level to execute the request at.
     */
    consistencyLevel?: ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;
    /**
     * Provides range filters for multiple attributes. When providing ranges to typed link selection, any inexact ranges must be specified at the end. Any attributes that do not have a range specified are presumed to match the entire range.
     */
    filterAttributeRanges?: shared.TypedLinkAttributeRange[];
    /**
     * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
     */
    filterTypedLink?: ListOutgoingTypedLinksRequestBodyFilterTypedLink;
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
    objectReference: ListOutgoingTypedLinksRequestBodyObjectReference;
}
export declare class ListOutgoingTypedLinksRequest extends SpeakeasyBase {
    requestBody: ListOutgoingTypedLinksRequestBody;
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
export declare class ListOutgoingTypedLinksResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * DirectoryNotEnabledException
     */
    directoryNotEnabledException?: any;
    /**
     * FacetValidationException
     */
    facetValidationException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listOutgoingTypedLinksResponse?: shared.ListOutgoingTypedLinksResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
