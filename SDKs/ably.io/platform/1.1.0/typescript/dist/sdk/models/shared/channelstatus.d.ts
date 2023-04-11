import { SpeakeasyBase } from "../../../internal/utils";
import { Occupancy } from "./occupancy";
/**
 * A ChannelStatus instance.
 */
export declare class ChannelStatus extends SpeakeasyBase {
    /**
     * A required boolean value indicating whether the channel that is the subject of the event is active. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
     */
    isActive: boolean;
    /**
     * An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
     */
    occupancy?: Occupancy;
}
