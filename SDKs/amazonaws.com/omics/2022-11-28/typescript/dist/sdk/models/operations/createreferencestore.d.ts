import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Server-side encryption (SSE) settings for a store.
 */
export declare class CreateReferenceStoreRequestBodySseConfig extends SpeakeasyBase {
    keyArn?: string;
    type?: shared.EncryptionTypeEnum;
}
export declare class CreateReferenceStoreRequestBody extends SpeakeasyBase {
    /**
     * To ensure that requests don't run multiple times, specify a unique token for each request.
     */
    clientToken?: string;
    /**
     * A description for the store.
     */
    description?: string;
    /**
     * A name for the store.
     */
    name: string;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    sseConfig?: CreateReferenceStoreRequestBodySseConfig;
    /**
     * Tags for the store.
     */
    tags?: Record<string, string>;
}
export declare class CreateReferenceStoreRequest extends SpeakeasyBase {
    requestBody: CreateReferenceStoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateReferenceStoreResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createReferenceStoreResponse?: shared.CreateReferenceStoreResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestTimeoutException
     */
    requestTimeoutException?: any;
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
