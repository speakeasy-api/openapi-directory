import { AxiosInstance } from "axios";
import { Search } from "./search";
export declare const ServerList: readonly ["https://codesearch.debian.net/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
