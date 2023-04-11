import { Category } from "./category";
import { Collection } from "./collection";
import { Ecosystem } from "./ecosystem";
import { Listing } from "./listing";
import { Product } from "./product";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.apideck.com"];
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
 * Ecosystem API
 *
 * @see {@link https://developers.apideck.com} - Apideck Developer Docs
 */
export declare class SDK {
    category: Category;
    collection: Collection;
    ecosystem: Ecosystem;
    listing: Listing;
    product: Product;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
