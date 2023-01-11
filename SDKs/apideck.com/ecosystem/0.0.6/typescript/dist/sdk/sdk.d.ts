import { AxiosInstance } from "axios";
import { Category } from "./category";
import { Collection } from "./collection";
import { Ecosystem } from "./ecosystem";
import { Listing } from "./listing";
import { Product } from "./product";
export declare const ServerList: readonly ["https://api.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
