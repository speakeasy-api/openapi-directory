import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A genome reference.
 */
export declare class CreateAnnotationStoreRequestBodyReference extends SpeakeasyBase {
    referenceArn?: string;
}
/**
 * Server-side encryption (SSE) settings for a store.
 */
export declare class CreateAnnotationStoreRequestBodySseConfig extends SpeakeasyBase {
    keyArn?: string;
    type?: shared.EncryptionTypeEnum;
}
/**
 * The annotation file format of the store.
 */
export declare enum CreateAnnotationStoreRequestBodyStoreFormatEnum {
    Gff = "GFF",
    Tsv = "TSV",
    Vcf = "VCF"
}
/**
 * Settings for a store.
 */
export declare class CreateAnnotationStoreRequestBodyStoreOptions extends SpeakeasyBase {
    tsvStoreOptions?: shared.TsvStoreOptions;
}
export declare class CreateAnnotationStoreRequestBody extends SpeakeasyBase {
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
    reference?: CreateAnnotationStoreRequestBodyReference;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    sseConfig?: CreateAnnotationStoreRequestBodySseConfig;
    /**
     * The annotation file format of the store.
     */
    storeFormat: CreateAnnotationStoreRequestBodyStoreFormatEnum;
    /**
     * Settings for a store.
     */
    storeOptions?: CreateAnnotationStoreRequestBodyStoreOptions;
    /**
     * Tags for the store.
     */
    tags?: Record<string, string>;
}
export declare class CreateAnnotationStoreRequest extends SpeakeasyBase {
    requestBody: CreateAnnotationStoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAnnotationStoreResponse extends SpeakeasyBase {
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
    createAnnotationStoreResponse?: shared.CreateAnnotationStoreResponse;
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
