import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about bandwidth_snapshots
 */
export declare class BandwidthSnapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Bandwidth Snapshots
     *
     * @remarks
     * List Bandwidth Snapshots
     */
    getBandwidthSnapshots(req: operations.GetBandwidthSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.GetBandwidthSnapshotsResponse>;
}
