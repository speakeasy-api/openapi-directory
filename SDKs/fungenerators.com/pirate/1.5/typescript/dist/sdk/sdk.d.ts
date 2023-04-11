import { Generation } from "./generation";
import { Translation } from "./translation";
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
 * Ahoy matey! We help the landlubbers to get to know about the seamen way! You can generate pirate names, get some real pirate insults and pirate filler text. Oh you can translate to pirate lingo as well. [Click here to subscribe](http://fungenerators.com/api/pirate/)
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Generate names, insults, lorem ipsum etc
     *
     * @see {@link http://fungenerators.com/api/pirate/} - Find out more
     */
    generation: Generation;
    /**
     * Translate to pirate lingo
     *
     * @see {@link http://fungenerators.com/api/pirate/} - Find out more
     */
    translation: Translation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
