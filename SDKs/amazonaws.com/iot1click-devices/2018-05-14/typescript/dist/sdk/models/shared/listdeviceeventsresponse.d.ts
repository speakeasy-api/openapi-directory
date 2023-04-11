import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceEvent } from "./deviceevent";
/**
 * Success
 */
export declare class ListDeviceEventsResponse extends SpeakeasyBase {
    events?: DeviceEvent[];
    nextToken?: string;
}
