import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Leads } from "./leads";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    leads: Leads;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
