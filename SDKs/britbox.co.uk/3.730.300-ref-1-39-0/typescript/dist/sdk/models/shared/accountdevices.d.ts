import { SpeakeasyBase } from "../../../internal/utils";
import { Device } from "./device";
import { DeviceRegistrationWindow } from "./deviceregistrationwindow";
/**
 * OK
 */
export declare class AccountDevices extends SpeakeasyBase {
    deregistrationWindow?: DeviceRegistrationWindow;
    /**
     * The array of registered playack devices.
     */
    devices: Device[];
    /**
     * The maximum number of playback devices that can be registered
     *
     * @remarks
     * under an account at a single time.
     *
     * If there is no maximum defined this value will be `-1`.
     *
     */
    maxRegistered: number;
    registrationWindow?: DeviceRegistrationWindow;
}
