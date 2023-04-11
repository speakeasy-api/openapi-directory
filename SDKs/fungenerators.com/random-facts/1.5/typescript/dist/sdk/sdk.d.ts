import { FactOfTheDay } from "./factoftheday";
import { NumberFacts } from "./numberfacts";
import { OnThisDay } from "./onthisday";
import { PrivateFacts } from "./privatefacts";
import { RandomFacts } from "./randomfacts";
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
 * A full featured Facts API. REST access with json/xml/jsonp result support. On this day birth and death support, random fact, keyword search support etc. Below is the documentation for the Random Facts API calls. You can try them out right here. [Click here to subscribe](http://fungenerators.com/api/facts/)
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Get fact of the day on various categories. This is refreshed daily.
     *
     * @see {@link http://fungenerators.com/api/facts#fact-of-the-day} - Find out more
     */
    factOfTheDay: FactOfTheDay;
    /**
     * Get a random interesting fact about a number.
     *
     * @see {@link http://fungenerators.com/api/facts#number} - Find out more
     */
    numberFacts: NumberFacts;
    /**
     * On this day historical events for birth, death and other events.
     *
     * @see {@link http://fungenerators.com/api/facts#number} - Find out more
     */
    onThisDay: OnThisDay;
    /**
     * Store and manage your own Facts online
     *
     * @see {@link http://fungenerators.com/api/facts#private} - Find out more
     */
    privateFacts: PrivateFacts;
    /**
     * Get random facts based on category and other criteria.
     *
     * @see {@link http://fungenerators.com/api/facts#number} - Find out more
     */
    randomFacts: RandomFacts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
