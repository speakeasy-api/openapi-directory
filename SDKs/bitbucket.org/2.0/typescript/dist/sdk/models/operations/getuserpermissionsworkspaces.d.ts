import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserPermissionsWorkspacesSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetUserPermissionsWorkspacesRequest extends SpeakeasyBase {
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
     * Name of a response property to sort results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
     * for details.
     *
     */
    sort?: string;
}
export declare class GetUserPermissionsWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request wasn't authenticated.
     */
    error?: Record<string, any>;
    /**
     * All of the workspace memberships for the authenticated user.
     */
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
