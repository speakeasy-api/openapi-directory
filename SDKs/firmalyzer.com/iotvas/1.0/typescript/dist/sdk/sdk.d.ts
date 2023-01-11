import { AxiosInstance } from "axios";
import { Device } from "./device";
import { Firmware } from "./firmware";
export declare const ServerList: readonly ["https://firmalyzer.com/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    device: Device;
    firmware: Firmware;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
