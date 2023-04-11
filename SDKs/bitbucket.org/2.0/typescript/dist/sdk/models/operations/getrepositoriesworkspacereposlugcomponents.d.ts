import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugComponentsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsRequest extends SpeakeasyBase {
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
export declare class GetRepositoriesWorkspaceRepoSlugComponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The specified repository does not exist or does not have the issue tracker enabled.
     */
    error?: Record<string, any>;
    /**
     * The components that have been defined in the issue tracker.
     */
    paginatedComponents?: shared.PaginatedComponents;
}
