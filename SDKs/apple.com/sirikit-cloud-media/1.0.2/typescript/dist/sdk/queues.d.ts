import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Queues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playMedia
     */
    playMediaOnQueue(req: operations.PlayMediaOnQueueRequest, config?: AxiosRequestConfig): Promise<operations.PlayMediaOnQueueResponse>;
    /**
     * updateActivity
     */
    updateActivityOnQueue(req: operations.UpdateActivityOnQueueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActivityOnQueueResponse>;
}
