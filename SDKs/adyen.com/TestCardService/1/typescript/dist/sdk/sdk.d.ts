import { AxiosInstance } from "axios";
import { General } from "./general";
export declare const ServerList: readonly ["https://pal-test.adyen.com/pal/services/TestCard/v1"];
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
