import { AxiosInstance } from "axios";
import { ContentproSearch } from "./contentprosearch";
import { ContentproSimilarText } from "./contentprosimilartext";
import { Search } from "./search";
import { Similar } from "./similar";
export declare const ServerList: readonly ["https://api.byautomata.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
