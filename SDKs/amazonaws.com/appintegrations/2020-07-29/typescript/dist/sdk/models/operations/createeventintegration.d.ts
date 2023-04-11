import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The event filter.
 */
export declare class CreateEventIntegrationRequestBodyEventFilter extends SpeakeasyBase {
    source?: string;
}
export declare class CreateEventIntegrationRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
     */
    clientToken?: string;
    /**
     * The description of the event integration.
     */
    description?: string;
    /**
     * The EventBridge bus.
     */
    eventBridgeBus: string;
    /**
     * The event filter.
     */
    eventFilter: CreateEventIntegrationRequestBodyEventFilter;
    /**
     * The name of the event integration.
     */
    name: string;
    /**
     * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     */
    tags?: Record<string, string>;
}
export declare class CreateEventIntegrationRequest extends SpeakeasyBase {
    requestBody: CreateEventIntegrationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateEventIntegrationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createEventIntegrationResponse?: shared.CreateEventIntegrationResponse;
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
