import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Success
 */
export declare class GetDeviceIdentifierResponse extends SpeakeasyBase {
    deviceIdentifier?: DeviceIdentifier;
    tags?: Record<string, string>;
}
