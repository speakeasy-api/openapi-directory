import { APICalls } from "./apicalls";
import * as shared from "./models/shared";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.digitalnz.org"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * OpenAPI specification of DigitalNZ's Record API.
 *
 * @remarks
 * For more information about the API see [digitalnz.org/developers](https://digitalnz.org/developers).
 * To learn more about the metadata/fields used in the API see the [Metadata Dictionary](https://docs.google.com/document/pub?id=1Z3I_ckQWjnQQ4SzpORbClcIXUheO-Jd4jt-oZFuMcoQ).
 * To get a sense of what content is available via the API take a look at the search feature on the [DigitalNZ website](https://digitalnz.org/records?text=all%20sorts&tab=Images).
 * The [terms of use](https://digitalnz.org/about/terms-of-use/developer-api-terms-of-use) specify how developers can use the DigitalNZ API.
 *
 */
export declare class SDK {
    apiCalls: APICalls;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
