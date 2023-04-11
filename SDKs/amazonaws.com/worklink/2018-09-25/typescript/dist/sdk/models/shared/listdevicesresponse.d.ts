import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";
/**
 * Success
 */
export declare class ListDevicesResponse extends SpeakeasyBase {
    devices?: DeviceSummary[];
    nextToken?: string;
}
