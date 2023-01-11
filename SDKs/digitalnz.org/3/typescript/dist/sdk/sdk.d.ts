import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ApiCalls } from "./apicalls";
export declare const ServerList: readonly ["https://api.digitalnz.org"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    apiCalls: ApiCalls;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
