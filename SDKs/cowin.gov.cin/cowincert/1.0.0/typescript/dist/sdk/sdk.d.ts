import { AxiosInstance } from "axios";
import { Certificate } from "./certificate";
export declare const ServerList: readonly ["https://cowin.gov.cin/cert/external"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    certificate: Certificate;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
