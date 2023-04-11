import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
 */
export declare class CreateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchDestination?: shared.CloudWatchDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    pinpointDestination?: shared.PinpointDestination;
    snsDestination?: shared.SnsDestination;
}
export declare class CreateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    /**
     * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
     */
    eventDestination: CreateConfigurationSetEventDestinationRequestBodyEventDestination;
    /**
     * <p>The name of an event destination.</p> <p> <i>Events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    eventDestinationName: string;
}
export declare class CreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set .
     */
    configurationSetName: string;
    requestBody: CreateConfigurationSetEventDestinationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    createConfigurationSetEventDestinationResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
