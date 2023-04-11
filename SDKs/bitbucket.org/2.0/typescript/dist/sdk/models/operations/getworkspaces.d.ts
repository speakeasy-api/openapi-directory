import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 *
 * @remarks
 *             Filters the workspaces based on the authenticated user's role on each workspace.
 *
 *             * **member**: returns a list of all the workspaces which the caller is a member of
 *                 at least one workspace group or repository
 *             * **collaborator**: returns a list of workspaces which the caller has write access
 *                 to at least one repository in the workspace
 *             * **owner**: returns a list of workspaces which the caller has administrator access
 *
 */
export declare enum GetWorkspacesRoleEnum {
    Owner = "owner",
    Collaborator = "collaborator",
    Member = "member"
}
export declare class GetWorkspacesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
     */
    q?: string;
    /**
     *
     * @remarks
     *             Filters the workspaces based on the authenticated user's role on each workspace.
     *
     *             * **member**: returns a list of all the workspaces which the caller is a member of
     *                 at least one workspace group or repository
     *             * **collaborator**: returns a list of workspaces which the caller has write access
     *                 to at least one repository in the workspace
     *             * **owner**: returns a list of workspaces which the caller has administrator access
     *
     */
    role?: GetWorkspacesRoleEnum;
    /**
     *
     * @remarks
     * Name of a response property to sort results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
     * for details.
     *
     */
    sort?: string;
}
export declare class GetWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request wasn't authenticated.
     */
    error?: Record<string, any>;
    /**
     * The list of workspaces accessible by the authenticated user.
     */
    paginatedWorkspaces?: shared.PaginatedWorkspaces;
}
