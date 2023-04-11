import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
 */
export declare class UpdateLinkAttributesRequestBodyTypedLinkSpecifier extends SpeakeasyBase {
    identityAttributeValues?: shared.AttributeNameAndValue[];
    sourceObjectReference?: shared.ObjectReference;
    targetObjectReference?: shared.ObjectReference;
    typedLinkFacet?: shared.TypedLinkSchemaAndFacetName;
}
export declare class UpdateLinkAttributesRequestBody extends SpeakeasyBase {
    /**
     * The attributes update structure.
     */
    attributeUpdates: shared.LinkAttributeUpdate[];
    /**
     * Contains all the information that is used to uniquely identify a typed link. The parameters discussed in this topic are used to uniquely specify the typed link being operated on. The <a>AttachTypedLink</a> API returns a typed link specifier while the <a>DetachTypedLink</a> API accepts one as input. Similarly, the <a>ListIncomingTypedLinks</a> and <a>ListOutgoingTypedLinks</a> API operations provide typed link specifiers as output. You can also construct a typed link specifier from scratch.
     */
    typedLinkSpecifier: UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
}
export declare class UpdateLinkAttributesRequest extends SpeakeasyBase {
    requestBody: UpdateLinkAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the Directory where the updated typed link resides. For more information, see <a>arns</a> or <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
     */
    xAmzDataPartition: string;
}
export declare class UpdateLinkAttributesResponse extends SpeakeasyBase {
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
     * LimitExceededException
     */
    limitExceededException?: shared.LimitExceededException;
    /**
     * RetryableConflictException
     */
    retryableConflictException?: shared.RetryableConflictException;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: shared.ResourceNotFoundException;
    /**
     * Success
     */
    updateLinkAttributesResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: shared.ValidationException;
}
