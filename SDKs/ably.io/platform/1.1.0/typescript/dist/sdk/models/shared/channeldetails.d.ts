import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelStatus } from "./channelstatus";
/**
 * OK
 */
export declare class ChannelDetails extends SpeakeasyBase {
    /**
     * The required name of the channel including any qualifier, if any.
     */
    channelId: string;
    /**
     * In events relating to the activity of a channel in a specific region, this optionally identifies whether or not that region is responsible for global coordination of the channel.
     */
    isGlobalMaster?: boolean;
    /**
     * In events relating to the activity of a channel in a specific region, this optionally identifies the region.
     */
    region?: string;
    /**
     * A ChannelStatus instance.
     */
    status?: ChannelStatus;
}
