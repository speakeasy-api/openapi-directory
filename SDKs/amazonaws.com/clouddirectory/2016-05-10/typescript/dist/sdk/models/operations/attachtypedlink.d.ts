import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class AttachTypedLinkRequestBodySourceObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * The reference that identifies an object.
 */
export declare class AttachTypedLinkRequestBodyTargetObjectReference extends SpeakeasyBase {
    selector?: string;
}
/**
 * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
 */
export declare class AttachTypedLinkRequestBodyTypedLinkFacet extends SpeakeasyBase {
    schemaArn?: string;
    typedLinkName?: string;
}
export declare class AttachTypedLinkRequestBody extends SpeakeasyBase {
    /**
     * A set of attributes that are associated with the typed link.
     */
    attributes: shared.AttributeNameAndValue[];
    /**
     * The reference that identifies an object.
     */
    sourceObjectReference: AttachTypedLinkRequestBodySourceObjectReference;
    /**
     * The reference that identifies an object.
     */
    targetObjectReference: AttachTypedLinkRequestBodyTargetObjectReference;
    /**
     * Identifies the schema Amazon Resource Name (ARN) and facet name for the typed link.
     */
    typedLinkFacet: AttachTypedLinkRequestBodyTypedLinkFacet;
}
export declare class AttachTypedLinkRequest extends SpeakeasyBase {
    requestBody: AttachTypedLinkRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the directory where you want to attach the typed link.
     */
    xAmzDataPartition: string;
}
export declare class AttachTypedLinkResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: shared.AccessDeniedException;
    /**
     * Success
     */
    attachTypedLinkResponse?: shared.AttachTypedLinkResponse;
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
     * InvalidAttachmentException
     */
    invalidAttachmentException?: shared.InvalidAttachmentException;
    /**
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
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
