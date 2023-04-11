import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
 */
export declare class Occupancy extends SpeakeasyBase {
    /**
     * The number of connections that are authorised to enter members into the presence channel.
     */
    presenceConnections?: number;
    /**
     * The number of members currently entered into the presence channel.
     */
    presenceMembers?: number;
    /**
     * The number of connections that are authorised to subscribe to presence messages.
     */
    presenceSubscribers?: number;
    /**
     * The number of connections attached to the channel that are authorised to publish.
     */
    publishers?: number;
    /**
     * The number of connections attached that are authorised to subscribe to messages.
     */
    subscribers?: number;
}
