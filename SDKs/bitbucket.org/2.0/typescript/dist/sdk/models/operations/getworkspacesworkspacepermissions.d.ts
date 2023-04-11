import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspacePermissionsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspacePermissionsRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Query string to narrow down the response as per
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    q?: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspacePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request wasn't authenticated.
     */
    error?: Record<string, any>;
    /**
     * The list of users that are part of a workspace, along with their permission.
     */
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
