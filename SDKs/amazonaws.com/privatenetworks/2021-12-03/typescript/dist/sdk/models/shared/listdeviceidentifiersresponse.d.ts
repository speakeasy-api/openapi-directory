import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Success
 */
export declare class ListDeviceIdentifiersResponse extends SpeakeasyBase {
    deviceIdentifiers?: DeviceIdentifier[];
    nextToken?: string;
}
