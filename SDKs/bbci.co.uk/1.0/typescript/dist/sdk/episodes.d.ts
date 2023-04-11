import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Episodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Clips
     *
     * @remarks
     * Get Clips
     */
    getClips(req: operations.GetClipsRequest, config?: AxiosRequestConfig): Promise<operations.GetClipsResponse>;
    /**
     * List all the episodes for a category.
     *
     * @remarks
     * Get the list of all the episodes for a given category in TV & iPlayer.
     */
    getEpisodesByCategory(req: operations.GetEpisodesByCategoryRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByCategoryResponse>;
    /**
     * Get episodes by group, brand or series
     *
     * @remarks
     * Get episodes by group, brand or series
     */
    getEpisodesByGroup(req: operations.GetEpisodesByGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByGroupResponse>;
    /**
     * Child episodes for a given programme pid.
     *
     * @remarks
     * Get the child episodes belonging to a given programme identifier.
     */
    getEpisodesByParentPID(req: operations.GetEpisodesByParentPIDRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesByParentPIDResponse>;
    /**
     * Get Onward Journey
     *
     * @remarks
     * Get Onward Journey (next programme)
     */
    getOnwardJourney(req: operations.GetOnwardJourneyRequest, config?: AxiosRequestConfig): Promise<operations.GetOnwardJourneyResponse>;
    /**
     * Episode for a given pid.
     *
     * @remarks
     * Get the episode for a given episode identifier.
     */
    getProgrammeByPID(req: operations.GetProgrammeByPIDRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeByPIDResponse>;
    /**
     * Get programme recommendations
     *
     * @remarks
     * Get programme recommendations
     */
    getProgrammeRecommendations(req: operations.GetProgrammeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammeRecommendationsResponse>;
    /**
     * Get programmes popular
     *
     * @remarks
     * Get programmes popular
     */
    getProgrammesPopular(req: operations.GetProgrammesPopularRequest, config?: AxiosRequestConfig): Promise<operations.GetProgrammesPopularResponse>;
    /**
     * Get Trailers (pre-rolls)
     *
     * @remarks
     * Get Trailers (pre-rolls)
     */
    getTrailersPreRolls(req: operations.GetTrailersPreRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetTrailersPreRollsResponse>;
    /**
     * Get Follow-ups (post-rolls)
     *
     * @remarks
     * Get Follow-ups (post-rolls)
     */
    getPostRolls(req: operations.GetPostRollsRequest, config?: AxiosRequestConfig): Promise<operations.GetPostRollsResponse>;
}
