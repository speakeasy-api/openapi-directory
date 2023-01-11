import { AxiosInstance } from "axios";
import { Barcode } from "./barcode";
export declare const ServerList: readonly ["http://api.fungenerators.com", "https://api.fungenerators.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    barcode: Barcode;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
