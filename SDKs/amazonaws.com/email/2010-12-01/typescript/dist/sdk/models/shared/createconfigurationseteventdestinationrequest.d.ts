import { SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";
/**
 * Represents a request to create a configuration set event destination. A configuration set event destination, which can be either Amazon CloudWatch or Amazon Kinesis Firehose, describes an AWS service in which Amazon SES publishes the email sending events associated with a configuration set. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    configurationSetName: string;
    eventDestination: EventDestination;
}
