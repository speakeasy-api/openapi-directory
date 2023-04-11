import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PodcastEpisodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Podcast Episodes
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of podcast episodes.
     *         "Podcast episodes" are episodes belonging to podcasts.
     *         It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
     *         It supports pagination, each page will contain 30 articles by default.
     */
    getPodcastEpisodes(req: operations.GetPodcastEpisodesRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastEpisodesResponse>;
}
