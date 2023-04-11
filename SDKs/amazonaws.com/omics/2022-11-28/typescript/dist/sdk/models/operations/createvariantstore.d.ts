import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A genome reference.
 */
export declare class CreateVariantStoreRequestBodyReference extends SpeakeasyBase {
    referenceArn?: string;
}
/**
 * Server-side encryption (SSE) settings for a store.
 */
export declare class CreateVariantStoreRequestBodySseConfig extends SpeakeasyBase {
    keyArn?: string;
    type?: shared.EncryptionTypeEnum;
}
export declare class CreateVariantStoreRequestBody extends SpeakeasyBase {
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * A name for the store.
     */
    name?: string;
    /**
     * A genome reference.
     */
    reference: CreateVariantStoreRequestBodyReference;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    sseConfig?: CreateVariantStoreRequestBodySseConfig;
    /**
     * Tags for the store.
     */
    tags?: Record<string, string>;
}
export declare class CreateVariantStoreRequest extends SpeakeasyBase {
    requestBody: CreateVariantStoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateVariantStoreResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createVariantStoreResponse?: shared.CreateVariantStoreResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
