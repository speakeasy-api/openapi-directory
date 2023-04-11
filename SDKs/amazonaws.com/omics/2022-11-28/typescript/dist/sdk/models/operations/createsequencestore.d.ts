import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Server-side encryption (SSE) settings for a store.
 */
export declare class CreateSequenceStoreRequestBodySseConfig extends SpeakeasyBase {
    keyArn?: string;
    type?: shared.EncryptionTypeEnum;
}
export declare class CreateSequenceStoreRequestBody extends SpeakeasyBase {
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
    sseConfig?: CreateSequenceStoreRequestBodySseConfig;
    /**
     * Tags for the store.
     */
    tags?: Record<string, string>;
}
export declare class CreateSequenceStoreRequest extends SpeakeasyBase {
    requestBody: CreateSequenceStoreRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSequenceStoreResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createSequenceStoreResponse?: shared.CreateSequenceStoreResponse;
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
