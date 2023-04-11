import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTimelineEventRequestBody extends SpeakeasyBase {
    /**
     * A token that ensures that a client calls the action only once with the specified details.
     */
    clientToken?: string;
    /**
     * A short description of the event.
     */
    eventData: string;
    /**
     * Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.
     */
    eventReferences?: shared.EventReference[];
    /**
     * The time that the event occurred.
     */
    eventTime: Date;
    /**
     * The type of event. You can create timeline events of type <code>Custom Event</code>.
     */
    eventType: string;
    /**
     * The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.
     */
    incidentRecordArn: string;
}
export declare class CreateTimelineEventRequest extends SpeakeasyBase {
    requestBody: CreateTimelineEventRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateTimelineEventResponse extends SpeakeasyBase {
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
    createTimelineEventOutput?: shared.CreateTimelineEventOutput;
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
