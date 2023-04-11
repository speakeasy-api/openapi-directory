import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Submit, moderate and retrieve user contributions
 */
export declare class Contribution {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete this contribution
     */
    deleteContributionsId(req: operations.DeleteContributionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContributionsIdResponse>;
    /**
     * List valid contribution refinement types
     */
    getContributionRefinementTypes(config?: AxiosRequestConfig): Promise<operations.GetContributionRefinementTypesResponse>;
    /**
     * List contribution refinement options
     *
     * @remarks
     * Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.
     */
    getContributionRefinements(req: operations.GetContributionRefinementsRequest, config?: AxiosRequestConfig): Promise<operations.GetContributionRefinementsResponse>;
    /**
     * List contributions
     *
     * @remarks
     * Retrieve contributions.
     */
    getContributions(req: operations.GetContributionsRequest, config?: AxiosRequestConfig): Promise<operations.GetContributionsResponse>;
    /**
     * Get a single contribution by id
     */
    getContributionsId(req: operations.GetContributionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContributionsIdResponse>;
    /**
     * List users who have liked this contributions
     *
     * @remarks
     * Returns a list of user ids of users who have liked this conribution
     */
    getContributionsIdLikes(req: operations.GetContributionsIdLikesRequest, config?: AxiosRequestConfig): Promise<operations.GetContributionsIdLikesResponse>;
    /**
     * Get a single export job; poll to follow export progress.
     */
    getExportsId(req: operations.GetExportsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsIdResponse>;
    /**
     * Create a new contribution
     */
    postContributions(req: shared.Contribution, security: operations.PostContributionsSecurity, config?: AxiosRequestConfig): Promise<operations.PostContributionsResponse>;
    /**
     * Raise a flag against this contribution
     *
     * @remarks
     * Allows end users to bring potential issues with publicly visible content to the attention of moderators.
     */
    postContributionsIdFlag(req: operations.PostContributionsIdFlagRequest, config?: AxiosRequestConfig): Promise<operations.PostContributionsIdFlagResponse>;
    /**
     * Allows a user to mark a contribution as liked
     */
    postContributionsIdLike(req: operations.PostContributionsIdLikeRequest, config?: AxiosRequestConfig): Promise<operations.PostContributionsIdLikeResponse>;
    /**
     * Perform a moderation action on this contribution
     *
     * @remarks
     * Allows the contribution to approved of rejected.
     */
    postContributionsIdModerate(req: operations.PostContributionsIdModerateRequest, config?: AxiosRequestConfig): Promise<operations.PostContributionsIdModerateResponse>;
    /**
     * Export contributions.
     *
     * @remarks
     * Begin an export job. Returns a export job which can be polled to follow the progress of an export.
     */
    postExport(req: operations.PostExportRequest, config?: AxiosRequestConfig): Promise<operations.PostExportResponse>;
    /**
     * Export contributions preflight summary.
     *
     * @remarks
     * Provide a preflight summary of an export request.
     */
    postExportSummary(req: operations.PostExportSummaryRequest, config?: AxiosRequestConfig): Promise<operations.PostExportSummaryResponse>;
}
