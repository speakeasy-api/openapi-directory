import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The data that is input into Wisdom as a result of the assistant association.
 */
export declare class CreateAssistantAssociationRequestBodyAssociation extends SpeakeasyBase {
    knowledgeBaseId?: string;
}
/**
 * The type of association.
 */
export declare enum CreateAssistantAssociationRequestBodyAssociationTypeEnum {
    KnowledgeBase = "KNOWLEDGE_BASE"
}
export declare class CreateAssistantAssociationRequestBody extends SpeakeasyBase {
    /**
     * The data that is input into Wisdom as a result of the assistant association.
     */
    association: CreateAssistantAssociationRequestBodyAssociation;
    /**
     * The type of association.
     */
    associationType: CreateAssistantAssociationRequestBodyAssociationTypeEnum;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
     */
    clientToken?: string;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tags?: Record<string, string>;
}
export declare class CreateAssistantAssociationRequest extends SpeakeasyBase {
    requestBody: CreateAssistantAssociationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
     */
    assistantId: string;
}
export declare class CreateAssistantAssociationResponse extends SpeakeasyBase {
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
    createAssistantAssociationResponse?: shared.CreateAssistantAssociationResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
