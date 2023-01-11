import { AxiosInstance } from "axios";
import { Domains } from "./domains";
import { Info } from "./info";
export declare const ServerList: readonly ["https://domainsdb.info/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    domains: Domains;
    info: Info;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
