import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Device {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * detectDeviceDetectPost - Detect iot device by service banners and mac address
     *
     * Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
    **/
    detectDeviceDetectPost(req: operations.DetectDeviceDetectPostRequest, config?: AxiosRequestConfig): Promise<operations.DetectDeviceDetectPostResponse>;
}
