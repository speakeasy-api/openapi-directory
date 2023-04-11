import { SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";
/**
 * Represents a request to update the event destination of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
 */
export declare class UpdateConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    configurationSetName: string;
    eventDestination: EventDestination;
}
