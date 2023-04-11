import { PrivateRiddles } from "./privateriddles";
import { RandomRiddle } from "./randomriddle";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.fungenerators.com", "http://api.fungenerators.com"];
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
 * Below is the documentation for the API calls. You can try them out right here.
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Store and Retrive your Riddles
     *
     * @see {@link http://fungenerators.com/api/riddle} - Find out more
     */
    privateRiddles: PrivateRiddles;
    /**
     * Generate Random Riddles
     *
     * @see {@link http://fungenerators.com/api/riddle} - Find out more
     */
    randomRiddle: RandomRiddle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
