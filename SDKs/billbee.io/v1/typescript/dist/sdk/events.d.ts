import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Events {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.
     */
    eventApiGetList(req: operations.EventApiGetListRequest, config?: AxiosRequestConfig): Promise<operations.EventApiGetListResponse>;
}
