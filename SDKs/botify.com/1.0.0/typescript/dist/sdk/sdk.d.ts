import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Analysis } from "./analysis";
import { Project } from "./project";
import { User } from "./user";
export declare const ServerList: readonly ["https://api.botify.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    analysis: Analysis;
    project: Project;
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
