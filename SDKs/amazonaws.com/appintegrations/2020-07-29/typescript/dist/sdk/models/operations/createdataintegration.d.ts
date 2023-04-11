import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The configuration for what files should be pulled from the source.
 */
export declare class CreateDataIntegrationRequestBodyFileConfiguration extends SpeakeasyBase {
    filters?: Record<string, string[]>;
    folders?: string[];
}
/**
 * The name of the data and how often it should be pulled from the source.
 */
export declare class CreateDataIntegrationRequestBodyScheduleConfig extends SpeakeasyBase {
    firstExecutionFrom?: string;
    object?: string;
    scheduleExpression?: string;
}
export declare class CreateDataIntegrationRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
     */
    clientToken?: string;
    /**
     * A description of the DataIntegration.
     */
    description?: string;
    /**
     * The configuration for what files should be pulled from the source.
     */
    fileConfiguration?: CreateDataIntegrationRequestBodyFileConfiguration;
    /**
     * The KMS key for the DataIntegration.
     */
    kmsKey: string;
    /**
     * The name of the DataIntegration.
     */
    name: string;
    /**
     * The configuration for what data should be pulled from the source.
     */
    objectConfiguration?: Record<string, Record<string, string[]>>;
    /**
     * The name of the data and how often it should be pulled from the source.
     */
    scheduleConfig: CreateDataIntegrationRequestBodyScheduleConfig;
    /**
     * The URI of the data source.
     */
    sourceURI: string;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    tags?: Record<string, string>;
}
export declare class CreateDataIntegrationRequest extends SpeakeasyBase {
    requestBody: CreateDataIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDataIntegrationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createDataIntegrationResponse?: shared.CreateDataIntegrationResponse;
    /**
     * DuplicateResourceException
     */
    duplicateResourceException?: any;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceQuotaExceededException
     */
    resourceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
