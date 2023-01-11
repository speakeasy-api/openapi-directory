import { AxiosInstance } from "axios";
import { Config } from "./config";
import { Intent } from "./intent";
import { Queues } from "./queues";
export declare const ServerList: readonly ["https://cloudextension-testservice.local/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    config: Config;
    intent: Intent;
    queues: Queues;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
