import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Applicants } from "./applicants";
import { Jobs } from "./jobs";
export declare const ServerList: readonly ["https://unify.apideck.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    applicants: Applicants;
    jobs: Jobs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
