import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a request to delete a configuration set event destination. Configuration set event destinations are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
 */
export declare class DeleteConfigurationSetEventDestinationRequest extends SpeakeasyBase {
    configurationSetName: string;
    eventDestinationName: string;
}
