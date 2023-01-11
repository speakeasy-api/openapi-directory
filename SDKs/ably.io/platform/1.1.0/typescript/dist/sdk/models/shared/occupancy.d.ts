import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Occupancy instance indicating the occupancy of a channel. For events indicating regional activity of a channel this indicates activity in that region, not global activity.
**/
export declare class Occupancy extends SpeakeasyBase {
    presenceConnections?: number;
    presenceMembers?: number;
    presenceSubscribers?: number;
    publishers?: number;
    subscribers?: number;
}
