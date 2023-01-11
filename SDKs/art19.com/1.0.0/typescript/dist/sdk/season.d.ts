import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Season {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSeasons - Get a list of seasons
     *
     * When retrieving a list of seasons, the result is automatically filtered depending on the
     * privileges the used credential holds. If there are no specific privileges to a series or network,
     * only active seasons for active series are included.
     *
    **/
    getSeasons(req: operations.GetSeasonsRequest, config?: AxiosRequestConfig): Promise<operations.GetSeasonsResponse>;
    /**
     * getSeasonsId - Get a specific season
    **/
    getSeasonsId(req: operations.GetSeasonsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSeasonsIdResponse>;
}
