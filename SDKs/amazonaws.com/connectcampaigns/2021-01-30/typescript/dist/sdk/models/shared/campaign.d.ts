import { SpeakeasyBase } from "../../../internal/utils";
import { DialerConfig } from "./dialerconfig";
import { OutboundCallConfig } from "./outboundcallconfig";
/**
 * An Amazon Connect campaign.
 */
export declare class Campaign extends SpeakeasyBase {
    /**
     * The resource name of an Amazon Connect campaign.
     */
    arn: string;
    /**
     * Amazon Connect Instance Id
     */
    connectInstanceId: string;
    /**
     * The possible types of dialer config parameters
     */
    dialerConfig: DialerConfig;
    /**
     * Identifier representing a Campaign
     */
    id: string;
    /**
     * The name of an Amazon Connect Campaign name.
     */
    name: string;
    /**
     * The configuration used for outbound calls.
     */
    outboundCallConfig: OutboundCallConfig;
    /**
     * Tag map with key and value.
     */
    tags?: Record<string, string>;
}
