import { UUIDGeneration } from "./uuidgeneration";
import { UUIDParsing } from "./uuidparsing";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.fungenerators.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * A full featured, REST based UUID generator with json/xml/jsonp result support. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/uuid/)
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Generate different versions of UUID easily.
     *
     * @see {@link https://fungenerators.com/api/uuid/} - Find out more
     */
    uuidGeneration: UUIDGeneration;
    /**
     * Parse UUID string and check for its validity and return version details
     *
     * @see {@link https://fungenerators.com/api/uuid/} - Find out more
     */
    uuidParsing: UUIDParsing;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
