import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Chatbot chat channel used for collaboration during an incident.
 */
export declare class UpdateResponsePlanRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Record<string, any>;
}
export declare class UpdateResponsePlanRequestBody extends SpeakeasyBase {
    /**
     * The actions that this response plan takes at the beginning of an incident.
     */
    actions?: shared.Action[];
    /**
     * The Amazon Resource Name (ARN) of the response plan.
     */
    arn: string;
    /**
     * The Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: UpdateResponsePlanRequestBodyChatChannel;
    /**
     * A token ensuring that the operation is called only once with the specified details.
     */
    clientToken?: string;
    /**
     * The long format name of the response plan. The display name can't contain spaces.
     */
    displayName?: string;
    /**
     * The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.
     */
    engagements?: string[];
    /**
     * The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.
     */
    incidentTemplateDedupeString?: string;
    /**
     * <p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>
     */
    incidentTemplateImpact?: number;
    /**
     * The Amazon SNS targets that are notified when updates are made to an incident.
     */
    incidentTemplateNotificationTargets?: shared.NotificationTargetItem[];
    /**
     * A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.
     */
    incidentTemplateSummary?: string;
    /**
     * Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource.
     */
    incidentTemplateTags?: Record<string, string>;
    /**
     * The short format name of the incident. The title can't contain spaces.
     */
    incidentTemplateTitle?: string;
    /**
     * Information about third-party services integrated into the response plan.
     */
    integrations?: shared.Integration[];
}
export declare class UpdateResponsePlanRequest extends SpeakeasyBase {
    requestBody: UpdateResponsePlanRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateResponsePlanResponse extends SpeakeasyBase {
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
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateResponsePlanOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
