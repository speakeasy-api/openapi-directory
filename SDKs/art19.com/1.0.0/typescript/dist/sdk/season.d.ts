import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Season {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of seasons
     *
     * @remarks
     * When retrieving a list of seasons, the result is automatically filtered depending on the
     * privileges the used credential holds. If there are no specific privileges to a series or network,
     * only active seasons for active series are included.
     *
     */
    getSeasons(req: operations.GetSeasonsRequest, security: operations.GetSeasonsSecurity, config?: AxiosRequestConfig): Promise<operations.GetSeasonsResponse>;
    /**
     * Get a specific season
     */
    getSeasonsId(req: operations.GetSeasonsIdRequest, security: operations.GetSeasonsIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetSeasonsIdResponse>;
}
