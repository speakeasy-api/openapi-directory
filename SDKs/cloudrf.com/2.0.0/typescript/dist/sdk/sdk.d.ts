import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Analyse } from "./analyse";
import { Create } from "./create";
import { Manage } from "./manage";
export declare const ServerList: readonly ["https://api.cloudrf.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    analyse: Analyse;
    create: Create;
    manage: Manage;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
