import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Cases } from "./cases";
import { Docs } from "./docs";
export declare const ServerList: readonly ["http://corona-virus-stats.herokuapp.com/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    cases: Cases;
    docs: Docs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
