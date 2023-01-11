import { AxiosInstance } from "axios";
import { ApIs } from "./apis";
export declare const ServerList: readonly ["https://apisetu.gov.in/upmsp/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apIs: ApIs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
