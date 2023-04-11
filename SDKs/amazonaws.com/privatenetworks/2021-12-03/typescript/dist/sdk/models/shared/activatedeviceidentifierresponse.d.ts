import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Success
 */
export declare class ActivateDeviceIdentifierResponse extends SpeakeasyBase {
    deviceIdentifier: DeviceIdentifier;
    tags?: Record<string, string>;
}
