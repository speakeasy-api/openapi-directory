import { AxiosInstance } from "axios";
import { Apps } from "./apps";
import { Keys } from "./keys";
import { Namespaces } from "./namespaces";
import { Queues } from "./queues";
import { Rules } from "./rules";
import { Tokens } from "./tokens";
export declare const ServerList: readonly ["https://control.ably.net/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    apps: Apps;
    keys: Keys;
    namespaces: Namespaces;
    queues: Queues;
    rules: Rules;
    tokens: Tokens;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
