import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The KMS key used for encryption.
 */
export declare class CreateAssistantRequestBodyServerSideEncryptionConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
}
/**
 * The type of assistant.
 */
export declare enum CreateAssistantRequestBodyTypeEnum {
    Agent = "AGENT"
}
export declare class CreateAssistantRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
     */
    clientToken?: string;
    /**
     * The description of the assistant.
     */
    description?: string;
    /**
     * The name of the assistant.
     */
    name: string;
    /**
     * The KMS key used for encryption.
     */
    serverSideEncryptionConfiguration?: CreateAssistantRequestBodyServerSideEncryptionConfiguration;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
    /**
     * The type of assistant.
     */
    type: CreateAssistantRequestBodyTypeEnum;
}
export declare class CreateAssistantRequest extends SpeakeasyBase {
    requestBody: CreateAssistantRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAssistantResponse extends SpeakeasyBase {
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
    createAssistantResponse?: shared.CreateAssistantResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
