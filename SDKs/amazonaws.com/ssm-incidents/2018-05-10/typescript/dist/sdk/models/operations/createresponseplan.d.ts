import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Chatbot chat channel used for collaboration during an incident.
 */
export declare class CreateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Record<string, any>;
}
/**
 * Basic details used in creating a response plan. The response plan is then used to create an incident record.
 */
export declare class CreateResponsePlanRequestBodyIncidentTemplate extends SpeakeasyBase {
    dedupeString?: string;
    impact?: number;
    incidentTags?: Record<string, string>;
    notificationTargets?: shared.NotificationTargetItem[];
    summary?: string;
    title?: string;
}
export declare class CreateResponsePlanRequestBody extends SpeakeasyBase {
    /**
     * The actions that the response plan starts at the beginning of an incident.
     */
    actions?: shared.Action[];
    /**
     * The Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: CreateResponsePlanRequestBodyChatChannel;
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * The long format of the response plan name. This field can contain spaces.
     */
    displayName?: string;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: string[];
    /**
     * Basic details used in creating a response plan. The response plan is then used to create an incident record.
     */
    incidentTemplate: CreateResponsePlanRequestBodyIncidentTemplate;
    /**
     * Information about third-party services integrated into the response plan.
     */
    integrations?: shared.Integration[];
    /**
     * The short format name of the response plan. Can't include spaces.
     */
    name: string;
    /**
     * A list of tags that you are adding to the response plan.
     */
    tags?: Record<string, string>;
}
export declare class CreateResponsePlanRequest extends SpeakeasyBase {
    requestBody: CreateResponsePlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResponsePlanResponse extends SpeakeasyBase {
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
    createResponsePlanOutput?: shared.CreateResponsePlanOutput;
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
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
