import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Episode {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getEpisodes - Get a list of episodes
     *
     * One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
     * will be returned. Additional filters are allowed.
     *
     * This API will only return episodes that your credential has permission to access, which may not be exclusive to
     * your account, depending on the filter(s) being used. Be careful to filter the results as needed.
     *
    **/
    getEpisodes(req: operations.GetEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesResponse>;
    /**
     * getEpisodesId - Get a specific episode
    **/
    getEpisodesId(req: operations.GetEpisodesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdResponse>;
    /**
     * getEpisodesIdNextSibling - Get the episode released right after the specified one
    **/
    getEpisodesIdNextSibling(req: operations.GetEpisodesIdNextSiblingRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdNextSiblingResponse>;
    /**
     * getEpisodesIdPreviousSibling - Get the episode released right before the specified one
    **/
    getEpisodesIdPreviousSibling(req: operations.GetEpisodesIdPreviousSiblingRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesIdPreviousSiblingResponse>;
}
