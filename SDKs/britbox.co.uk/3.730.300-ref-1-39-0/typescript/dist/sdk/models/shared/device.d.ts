import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class Device extends SpeakeasyBase {
    /**
     * The unique identifier for this device e.g. serial number.
     */
    id: string;
    /**
     * The human recognisable name for this device.
     */
    name: string;
    /**
     * The date this device was registered.
     */
    registrationDate: Date;
    /**
     * The device type e.g. web_browser.
     */
    type: string;
}
