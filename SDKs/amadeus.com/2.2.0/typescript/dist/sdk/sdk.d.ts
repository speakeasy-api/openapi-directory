import { AxiosInstance } from "axios";
import { Shopping } from "./shopping";
export declare const ServerList: readonly ["https://test.api.amadeus.com/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    shopping: Shopping;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
