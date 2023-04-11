import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 *
 * @remarks
 * Filters the result based on the authenticated user's role on each repository.
 *
 * * **member**: returns repositories to which the user has explicit read access
 * * **contributor**: returns repositories to which the user has explicit write access
 * * **admin**: returns repositories to which the user has explicit administrator access
 * * **owner**: returns all repositories owned by the current user
 *
 */
export declare enum GetRepositoriesWorkspaceRoleEnum {
    Admin = "admin",
    Contributor = "contributor",
    Member = "member",
    Owner = "owner"
}
export declare class GetRepositoriesWorkspaceRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     */
    q?: string;
    /**
     *
     * @remarks
     * Filters the result based on the authenticated user's role on each repository.
     *
     * * **member**: returns repositories to which the user has explicit read access
     * * **contributor**: returns repositories to which the user has explicit write access
     * * **admin**: returns repositories to which the user has explicit administrator access
     * * **owner**: returns all repositories owned by the current user
     *
     */
    role?: GetRepositoriesWorkspaceRoleEnum;
    /**
     *
     * @remarks
     * Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     *
     */
    sort?: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified account does not exist.
     */
    error?: Record<string, any>;
    /**
     * The repositories owned by the specified account.
     */
    paginatedRepositories?: shared.PaginatedRepositories;
}
