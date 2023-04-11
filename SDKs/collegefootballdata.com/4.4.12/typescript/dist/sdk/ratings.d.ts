import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team rating data
 */
export declare class Ratings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Historical SP+ ratings by conference
     *
     * @remarks
     * Get average SP+ historical rating data by conference
     */
    getConferenceSPRatings(req: operations.GetConferenceSPRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetConferenceSPRatingsResponse>;
    /**
     * Historical Elo ratings
     *
     * @remarks
     * Elo rating data
     */
    getEloRatings(req: operations.GetEloRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetEloRatingsResponse>;
    /**
     * Historical SP+ ratings
     *
     * @remarks
     * SP+ rating data
     */
    getSPRatings(req: operations.GetSPRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSPRatingsResponse>;
    /**
     * Historical SRS ratings
     *
     * @remarks
     * SRS rating data (requires either a year or team specified)
     */
    getSRSRatings(req: operations.GetSRSRatingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSRSRatingsResponse>;
}
