import { AxiosInstance } from "axios";
import { Activity } from "./activity";
import { Files } from "./files";
import { Health } from "./health";
import { Items } from "./items";
import { Metrics } from "./metrics";
import { Vaults } from "./vaults";
export declare const ServerList: readonly ["http://1password.local", "http://localhost:8080/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    activity: Activity;
    files: Files;
    health: Health;
    items: Items;
    metrics: Metrics;
    vaults: Vaults;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
