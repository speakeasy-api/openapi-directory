import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Log
 */
export declare class Log extends SpeakeasyBase {
    /**
     * Client code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/clients.json).
     */
    clientCode: string;
    /**
     * Client engine name.
     */
    clientEngine: string;
    /**
     * Client engine name.
     */
    clientEngineVersion: string;
    /**
     * Client name.
     */
    clientName: string;
    /**
     * Client type.
     */
    clientType: string;
    /**
     * Client version.
     */
    clientVersion: string;
    /**
     * Country two-character ISO 3166-1 alpha code.
     */
    countryCode: string;
    /**
     * Country name.
     */
    countryName: string;
    /**
     * Device brand name.
     */
    deviceBrand: string;
    /**
     * Device model name.
     */
    deviceModel: string;
    /**
     * Device name.
     */
    deviceName: string;
    /**
     * Event name.
     */
    event: string;
    /**
     * IP session in use when the session was created.
     */
    ip: string;
    /**
     * Operating system code name. View list of [available options](https://github.com/appwrite/appwrite/blob/master/docs/lists/os.json).
     */
    osCode: string;
    /**
     * Operating system name.
     */
    osName: string;
    /**
     * Operating system version.
     */
    osVersion: string;
    /**
     * Log creation time in Unix timestamp.
     */
    time: number;
}
