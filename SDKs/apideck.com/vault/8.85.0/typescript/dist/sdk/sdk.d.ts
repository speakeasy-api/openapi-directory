import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Connections } from "./connections";
import { Consumers } from "./consumers";
import { Logs } from "./logs";
import { Sessions } from "./sessions";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    connections: Connections;
    consumers: Consumers;
    logs: Logs;
    sessions: Sessions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
