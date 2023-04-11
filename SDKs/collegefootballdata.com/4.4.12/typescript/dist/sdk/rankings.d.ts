import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Historical poll rankings
 */
export declare class Rankings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Historical polls and rankings
     *
     * @remarks
     * Poll rankings
     */
    getRankings(req: operations.GetRankingsRequest, config?: AxiosRequestConfig): Promise<operations.GetRankingsResponse>;
}
