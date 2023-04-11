import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * NFL Draft data
 */
export declare class Draft {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List of NFL Draft picks
     *
     * @remarks
     * List of NFL Draft picks
     */
    getDraftPicks(req: operations.GetDraftPicksRequest, config?: AxiosRequestConfig): Promise<operations.GetDraftPicksResponse>;
    /**
     * List of NFL positions
     *
     * @remarks
     * List of NFL positions
     */
    getNFLPositions(config?: AxiosRequestConfig): Promise<operations.GetNFLPositionsResponse>;
    /**
     * List of NFL teams
     *
     * @remarks
     * List of NFL teams
     */
    getNFLTeams(config?: AxiosRequestConfig): Promise<operations.GetNFLTeamsResponse>;
}
