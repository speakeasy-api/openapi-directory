import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about remote_bandwidth_snapshots
 */
export declare class RemoteBandwidthSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Remote Bandwidth Snapshots
     *
     * @remarks
     * List Remote Bandwidth Snapshots
     */
    getRemoteBandwidthSnapshots(req: operations.GetRemoteBandwidthSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoteBandwidthSnapshotsResponse>;
}
