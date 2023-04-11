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
    accessDeniedException?: any;
    /**
     * Success
     */
    attachTypedLinkResponse?: shared.AttachTypedLinkResponse;
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
     * InvalidAttachmentException
     */
    invalidAttachmentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
