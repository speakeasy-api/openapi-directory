import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about usage_snapshots
 */
export declare class UsageSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Usage Snapshots
     *
     * @remarks
     * List Usage Snapshots
     */
    getUsageSnapshots(req: operations.GetUsageSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageSnapshotsResponse>;
}
