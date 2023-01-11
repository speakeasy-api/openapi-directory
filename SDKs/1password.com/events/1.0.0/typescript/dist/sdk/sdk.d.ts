import { AxiosInstance } from "axios";
import { ApiV1 } from "./apiv1";
import { Auth } from "./auth";
export declare const ServerList: readonly ["https://events.1password.com", "https://events.1password.ca", "https://events.1password.eu", "https://events.ent.1password.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apiV1: ApiV1;
    auth: Auth;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
