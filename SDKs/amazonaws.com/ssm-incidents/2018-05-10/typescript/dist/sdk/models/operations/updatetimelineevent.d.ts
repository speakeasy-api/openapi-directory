import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTimelineEventRequestBody extends SpeakeasyBase {
    /**
     * A token that ensures that a client calls the operation only once with the specified details.
     */
    clientToken?: string;
    /**
     * A short description of the event.
     */
    eventData?: string;
    /**
     * The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.
     */
    eventId: string;
    /**
     * <p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.</p> <important> <p>This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.</p> </important>
     */
    eventReferences?: shared.EventReference[];
    /**
     * The time that the event occurred.
     */
    eventTime?: Date;
    /**
     * The type of event. You can update events of type <code>Custom Event</code>.
     */
    eventType?: string;
    /**
     * The Amazon Resource Name (ARN) of the incident that includes the timeline event.
     */
    incidentRecordArn: string;
}
export declare class UpdateTimelineEventRequest extends SpeakeasyBase {
    requestBody: UpdateTimelineEventRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateTimelineEventResponse extends SpeakeasyBase {
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
    updateTimelineEventOutput?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
