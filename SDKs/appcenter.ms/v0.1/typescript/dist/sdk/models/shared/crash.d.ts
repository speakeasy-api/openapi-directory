import { SpeakeasyBase } from "../../../internal/utils";
import { Stacktrace } from "./stacktrace";
export declare class CrashDetails extends SpeakeasyBase {
    /**
     * Application launch timestamp (example: 1985-04-12T23:20:50.52Z).
     *
     * @remarks
     *
     */
    appStartTimestamp?: Date;
    /**
     * Carrier country code (for mobile devices).
     *
     * @remarks
     *
     */
    carrierCountry?: string;
    /**
     * Carrier name (for mobile devices).
     *
     * @remarks
     *
     */
    carrierName?: string;
    /**
     * Language code (example: en_US).
     *
     * @remarks
     *
     */
    locale: string;
    /**
     * OS build code (example: LMY47X).
     *
     * @remarks
     *
     */
    osBuild?: string;
    /**
     * Whether the device where the crash occurred is rooted or jailbroken
     *
     * @remarks
     *
     */
    rooted: boolean;
    /**
     * Screen size of the device in pixels (example: 640x480).
     *
     * @remarks
     *
     */
    screenSize: string;
}
/**
 * Created
 */
export declare class Crash extends SpeakeasyBase {
    build: string;
    crashId: string;
    details?: CrashDetails;
    device: string;
    deviceName?: string;
    displayId?: string;
    newCrashGroupId: string;
    newCrashId: string;
    osType?: string;
    osVersion: string;
    /**
     * a stacktrace in a processed and prettyfied way
     */
    stacktrace?: Stacktrace;
    timestamp: Date;
    userEmail?: string;
    userName: string;
    version: string;
}
