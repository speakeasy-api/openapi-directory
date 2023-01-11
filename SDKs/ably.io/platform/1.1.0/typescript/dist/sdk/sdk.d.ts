import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Authentication } from "./authentication";
import { History } from "./history";
import { Push } from "./push";
import { Stats } from "./stats";
import { Status } from "./status";
export declare const ServerList: readonly ["https://rest.ably.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    authentication: Authentication;
    history: History;
    push: Push;
    stats: Stats;
    status: Status;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
