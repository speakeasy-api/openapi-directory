import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
 */
export declare enum CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum {
    External = "EXTERNAL",
    Custom = "CUSTOM"
}
/**
 * Information about how to render the content.
 */
export declare class CreateKnowledgeBaseRequestBodyRenderingConfiguration extends SpeakeasyBase {
    templateUri?: string;
}
/**
 * The KMS key used for encryption.
 */
export declare class CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration extends SpeakeasyBase {
    kmsKeyId?: string;
}
/**
 * Configuration information about the external data source.
 */
export declare class CreateKnowledgeBaseRequestBodySourceConfiguration extends SpeakeasyBase {
    appIntegrations?: shared.AppIntegrationsConfiguration;
}
export declare class CreateKnowledgeBaseRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
     */
    clientToken?: string;
    /**
     * The description.
     */
    description?: string;
    /**
     * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
     */
    knowledgeBaseType: CreateKnowledgeBaseRequestBodyKnowledgeBaseTypeEnum;
    /**
     * The name of the knowledge base.
     */
    name: string;
    /**
     * Information about how to render the content.
     */
    renderingConfiguration?: CreateKnowledgeBaseRequestBodyRenderingConfiguration;
    /**
     * The KMS key used for encryption.
     */
    serverSideEncryptionConfiguration?: CreateKnowledgeBaseRequestBodyServerSideEncryptionConfiguration;
    /**
     * Configuration information about the external data source.
     */
    sourceConfiguration?: CreateKnowledgeBaseRequestBodySourceConfiguration;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateKnowledgeBaseRequest extends SpeakeasyBase {
    requestBody: CreateKnowledgeBaseRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateKnowledgeBaseResponse extends SpeakeasyBase {
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
    createKnowledgeBaseResponse?: shared.CreateKnowledgeBaseResponse;
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
