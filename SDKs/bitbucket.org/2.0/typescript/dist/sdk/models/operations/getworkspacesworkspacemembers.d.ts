import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceMembersSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceMembersRequest extends SpeakeasyBase {
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspaceMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request wasn't authenticated.
     */
    error?: Record<string, any>;
    /**
     * The list of users that are part of a workspace.
     */
    paginatedWorkspaceMemberships?: shared.PaginatedWorkspaceMemberships;
}
