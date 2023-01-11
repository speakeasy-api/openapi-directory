import { AxiosInstance } from "axios";
import { Exude } from "./exude";
export declare const ServerList: readonly ["https://exude-api.herokuapp.com", "http://localhost:8080"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    exude: Exude;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
