import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the device associated with the event.
 */
export declare class DeviceEventDevice extends SpeakeasyBase {
    attributes?: Record<string, any>;
    deviceId?: string;
    type?: string;
}
export declare class DeviceEvent extends SpeakeasyBase {
    device?: DeviceEventDevice;
    stdEvent?: string;
}
