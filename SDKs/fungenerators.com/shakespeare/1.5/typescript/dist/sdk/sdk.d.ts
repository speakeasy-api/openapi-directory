import { Generation } from "./generation";
import { Translation } from "./translation";
import { Works } from "./works";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.fungenerators.com", "https://api.fungenerators.com"];
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
 * Shakespeare API. Generate random Shakespeare quotes, names, insults, lorem ipsum etc. Translate normal English to Shakespeare English.  [Click here to subscribe](http://fungenerators.com/api/shakespeare/)
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Generate random quotes, names, insults, lorem ipsum etc
     *
     * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
     */
    generation: Generation;
    /**
     * Translate to Shakespeare English
     *
     * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
     */
    translation: Translation;
    /**
     * Get Shakespeare Works via API
     *
     * @see {@link http://fungenerators.com/api/shakespeare/} - Find out more
     */
    works: Works;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
