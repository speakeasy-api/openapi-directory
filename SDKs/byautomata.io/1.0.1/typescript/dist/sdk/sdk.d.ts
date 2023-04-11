import { ContentproSearch } from "./contentprosearch";
import { ContentproSimilarText } from "./contentprosimilartext";
import { Search } from "./search";
import { Similar } from "./similar";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.byautomata.io"];
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
 * This document provides the documentation for the Market Intelligence API by Automata. Get your API Key at https://apis.byautomata.io and check out our <a href='https://www.getpostman.com/collections/d182a1c78d4491d55e19'>Postman Collection</a>.<br><br>The root API endpoint is https://api.byautomata.io. Please refer to the code samples for examples of how to call the Market Intelligence API. The ContentPro endpoints (/contentpro-search and /contentpro-similar-text) are not included in the standard Market Intelligence API plans. Please contact support@byautomata.io for access.
 *
 * @see {@link http://byautomata.io} - Find out more about Automata and other Market Intelligence products.
 */
export declare class SDK {
    contentproSearch: ContentproSearch;
    contentproSimilarText: ContentproSimilarText;
    search: Search;
    similar: Similar;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
