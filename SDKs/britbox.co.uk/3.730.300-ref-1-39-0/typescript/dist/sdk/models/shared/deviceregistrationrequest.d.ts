import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Registration details for a new playback device.
 */
export declare class DeviceRegistrationRequest extends SpeakeasyBase {
    /**
     * The unique identifier for this device e.g. serial number.
     */
    id: string;
    /**
     * A human recognisable name for this device.
     */
    name: string;
    /**
     * The device type e.g. web_browser.
     */
    type: string;
}
