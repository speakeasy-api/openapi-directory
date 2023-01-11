import { AxiosInstance } from "axios";
import { Content } from "./content";
import { Document } from "./document";
import { Search } from "./search";
export declare const ServerList: readonly ["http://www.bclaws.ca/civix", "https://www.bclaws.ca/civix"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    content: Content;
    document: Document;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
