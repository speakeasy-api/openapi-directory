import { Default } from "./default";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/"];
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
 * ![](https://www.circl.lu/assets/images/circl-logo.png)
 *
 * @remarks
 * [CIRCL hash lookup](https://hashlookup.circl.lu/) is a public API to lookup hash values against known database of files. For more details about all the datasets included [visit the website of the project](https://www.circl.lu/services/hashlookup/). The API is accessible via HTTP ReST API and the API is also [described as an OpenAPI](https://hashlookup.circl.lu/swagger.json). A [documentation is available with](https://www.circl.lu/services/hashlookup/) with sample queries and software using hashlookup. An offline version as Bloom filter is also [available](https://circl.lu/services/hashlookup/#how-to-quickly-check-a-set-of-files-in-a-local-directory). The API can be tested live in the interface below.
 */
export declare class SDK {
    /**
     * Default namespace
     */
    default: Default;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
