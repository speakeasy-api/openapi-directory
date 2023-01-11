import { AxiosInstance } from "axios";
import { Administrative } from "./administrative";
import { Billing } from "./billing";
import { Clinical } from "./clinical";
import { PracticeManagement } from "./practicemanagement";
export declare const ServerList: readonly ["https://app.drchrono.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    administrative: Administrative;
    billing: Billing;
    clinical: Clinical;
    practiceManagement: PracticeManagement;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
