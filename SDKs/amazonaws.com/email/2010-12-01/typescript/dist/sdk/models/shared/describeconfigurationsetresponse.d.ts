import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationSet } from "./configurationset";
import { DeliveryOptions } from "./deliveryoptions";
import { EventDestination } from "./eventdestination";
import { ReputationOptions } from "./reputationoptions";
import { TrackingOptions } from "./trackingoptions";
/**
 * Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
 */
export declare class DescribeConfigurationSetResponse extends SpeakeasyBase {
    configurationSet?: ConfigurationSet;
    /**
     * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     */
    deliveryOptions?: DeliveryOptions;
    eventDestinations?: EventDestination[];
    reputationOptions?: ReputationOptions;
    trackingOptions?: TrackingOptions;
}
