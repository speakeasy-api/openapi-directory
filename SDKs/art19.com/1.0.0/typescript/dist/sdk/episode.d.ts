import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Episode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of episodes
     *
     * @remarks
     * One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
     * will be returned. Additional filters are allowed.
     *
     * This API will only return episodes that your credential has permission to access, which may not be exclusive to
     * your account, depending on the filter(s) being used. Be careful to filter the results as needed.
     *
     */
    getEpisodes(req: operations.GetEpisodesRequest, security: operations.GetEpisodesSecurity, config?: AxiosRequestConfig): Promise<operations.GetEpisodesResponse>;
    /**
     * Get a specific episode
     */
    getEpisodesId(req: operations.GetEpisodesIdRequest, security: operations.GetEpisodesIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdResponse>;
    /**
     * Get the episode released right after the specified one
     */
    getEpisodesIdNextSibling(req: operations.GetEpisodesIdNextSiblingRequest, security: operations.GetEpisodesIdNextSiblingSecurity, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdNextSiblingResponse>;
    /**
     * Get the episode released right before the specified one
     */
    getEpisodesIdPreviousSibling(req: operations.GetEpisodesIdPreviousSiblingRequest, security: operations.GetEpisodesIdPreviousSiblingSecurity, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdPreviousSiblingResponse>;
}
