import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about usage_daily_snapshots
 */
export declare class UsageDailySnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Usage Daily Snapshots
     *
     * @remarks
     * List Usage Daily Snapshots
     */
    getUsageDailySnapshots(req: operations.GetUsageDailySnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsageDailySnapshotsResponse>;
}
