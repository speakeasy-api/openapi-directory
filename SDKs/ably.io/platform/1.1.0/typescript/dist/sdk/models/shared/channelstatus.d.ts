import { SpeakeasyBase } from "../../../internal/utils";
import { Occupancy } from "./occupancy";
/**
 * A ChannelStatus instance.
**/
export declare class ChannelStatus extends SpeakeasyBase {
    isActive: boolean;
    occupancy?: Occupancy;
}
