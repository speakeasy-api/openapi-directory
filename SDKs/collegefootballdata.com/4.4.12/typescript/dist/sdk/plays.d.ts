import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Play by play data
 */
export declare class Plays {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Live metrics and PBP (Patreon only)
     *
     * @remarks
     * Get live metrics and PBP
     */
    getLivePlays(req: operations.GetLivePlaysRequest, config?: AxiosRequestConfig): Promise<operations.GetLivePlaysResponse>;
    /**
     * Types of player play stats
     *
     * @remarks
     * Type of play stats
     */
    getPlayStatTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayStatTypesResponse>;
    /**
     * Play stats by play
     *
     * @remarks
     * Gets player stats associated by play (limit 1000)
     */
    getPlayStats(req: operations.GetPlayStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlayStatsResponse>;
    /**
     * Play types
     *
     * @remarks
     * Types of plays
     */
    getPlayTypes(config?: AxiosRequestConfig): Promise<operations.GetPlayTypesResponse>;
    /**
     * Play by play data
     *
     * @remarks
     * Get play data and results
     */
    getPlays(req: operations.GetPlaysRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaysResponse>;
}
