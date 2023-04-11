import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The reference that identifies an object.
 */
export declare class CreateObjectRequestBodyParentReference extends SpeakeasyBase {
    selector?: string;
}
export declare class CreateObjectRequestBody extends SpeakeasyBase {
    /**
     * The name of link that is used to attach this object to a parent.
     */
    linkName?: string;
    /**
     * The attribute map whose attribute ARN contains the key and attribute value as the map value.
     */
    objectAttributeList?: shared.AttributeKeyAndValue[];
    /**
     * The reference that identifies an object.
     */
    parentReference?: CreateObjectRequestBodyParentReference;
    /**
     * A list of schema facets to be associated with the object. Do not provide minor version components. See <a>SchemaFacet</a> for details.
     */
    schemaFacets: shared.SchemaFacet[];
}
export declare class CreateObjectRequest extends SpeakeasyBase {
    requestBody: CreateObjectRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> in which the object will be created. For more information, see <a>arns</a>.
     */
    xAmzDataPartition: string;
}
export declare class CreateObjectResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createObjectResponse?: shared.CreateObjectResponse;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * LinkNameAlreadyInUseException
     */
    linkNameAlreadyInUseException?: any;
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
     * UnsupportedIndexTypeException
     */
    unsupportedIndexTypeException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
