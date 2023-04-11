import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest extends SpeakeasyBase {
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have access to view the default reviewers
     */
    error?: Record<string, any>;
    /**
     * The paginated list of effective default reviewers
     */
    paginatedDefaultReviewerAndType?: shared.PaginatedDefaultReviewerAndType;
}
