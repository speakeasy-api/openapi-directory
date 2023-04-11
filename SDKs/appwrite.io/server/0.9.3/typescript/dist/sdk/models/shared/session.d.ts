import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Session
 */
export declare class Session extends SpeakeasyBase {
    /**
     * Session ID.
     */
    dollarId: string;
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
     * Returns true if this the current user session.
     */
    current: boolean;
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
     * Session expiration date in Unix timestamp.
     */
    expire: number;
    /**
     * IP in use when the session was created.
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
     * Session Provider.
     */
    provider: string;
    /**
     * Session Provider Token.
     */
    providerToken: string;
    /**
     * Session Provider User ID.
     */
    providerUid: string;
    /**
     * User ID.
     */
    userId: string;
}
