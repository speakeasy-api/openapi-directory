import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSet } from "./configurationset";
/**
 * Represents a request to create a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
 */
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    configurationSet: ConfigurationSet;
}
