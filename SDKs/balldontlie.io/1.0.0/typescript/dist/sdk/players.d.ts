import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Players {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * all players (search)
     *
     * @remarks
     * all players (search)
     */
    allPlayersSearch(req: operations.AllPlayersSearchRequest, config?: AxiosRequestConfig): Promise<operations.AllPlayersSearchResponse>;
    /**
     * specific player
     *
     * @remarks
     * specific player
     */
    specificPlayer(config?: AxiosRequestConfig): Promise<operations.SpecificPlayerResponse>;
}
