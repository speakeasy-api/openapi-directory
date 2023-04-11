import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
 */
export declare class UpdateConfigurationSetEventDestinationRequestBodyEventDestination extends SpeakeasyBase {
    cloudWatchDestination?: shared.CloudWatchDestination;
    enabled?: boolean;
    kinesisFirehoseDestination?: shared.KinesisFirehoseDestination;
    matchingEventTypes?: shared.EventTypeEnum[];
    pinpointDestination?: shared.PinpointDestination;
    snsDestination?: shared.SnsDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequestBody extends SpeakeasyBase {
    /**
     * An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.
     */
    eventDestination: UpdateConfigurationSetEventDestinationRequestBodyEventDestination;
}
export declare class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    /**
     * The name of the configuration set that contains the event destination to modify.
     */
    configurationSetName: string;
    /**
     * The name of the event destination.
     */
    eventDestinationName: string;
    requestBody: UpdateConfigurationSetEventDestinationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConfigurationSetEventDestinationResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
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
    /**
     * Success
     */
    updateConfigurationSetEventDestinationResponse?: Record<string, any>;
}
