import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The Chatbot chat channel used for collaboration during an incident.
 */
export declare class UpdateIncidentRecordRequestBodyChatChannel extends SpeakeasyBase {
    chatbotSns?: string[];
    empty?: Record<string, any>;
}
/**
 * The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>.
 */
export declare enum UpdateIncidentRecordRequestBodyStatusEnum {
    Open = "OPEN",
    Resolved = "RESOLVED"
}
export declare class UpdateIncidentRecordRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the incident record you are updating.
     */
    arn: string;
    /**
     * The Chatbot chat channel used for collaboration during an incident.
     */
    chatChannel?: UpdateIncidentRecordRequestBodyChatChannel;
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: string;
    /**
     * <p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren't impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren't currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>
     */
    impact?: number;
    /**
     * <p>The Amazon SNS targets that Incident Manager notifies when a client updates an incident.</p> <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.</p>
     */
    notificationTargets?: shared.NotificationTargetItem[];
    /**
     * The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>.
     */
    status?: UpdateIncidentRecordRequestBodyStatusEnum;
    /**
     * A longer description of what occurred during the incident.
     */
    summary?: string;
    /**
     * A brief description of the incident.
     */
    title?: string;
}
export declare class UpdateIncidentRecordRequest extends SpeakeasyBase {
    requestBody: UpdateIncidentRecordRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIncidentRecordResponse extends SpeakeasyBase {
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
    updateIncidentRecordOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
