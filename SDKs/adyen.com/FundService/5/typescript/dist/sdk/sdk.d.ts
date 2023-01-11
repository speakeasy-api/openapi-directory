import { AxiosInstance } from "axios";
import { General } from "./general";
export declare const ServerList: readonly ["https://cal-test.adyen.com/cal/services/Fund/v5"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    general: General;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
