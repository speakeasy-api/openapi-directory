import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspacePermissionsRepositoriesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspacePermissionsRepositoriesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    q?: string;
    /**
     *
     * @remarks
     * Name of a response property sort the result by as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
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
export declare class GetWorkspacesWorkspacePermissionsRepositoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requesting user isn't an admin of the workspace.
     */
    error?: Record<string, any>;
    /**
     * List of workspace's repository permissions.
     */
    paginatedRepositoryPermissions?: shared.PaginatedRepositoryPermissions;
}
