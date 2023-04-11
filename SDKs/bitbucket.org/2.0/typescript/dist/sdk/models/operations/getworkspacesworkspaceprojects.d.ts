import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceProjectsSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceProjectsRequest extends SpeakeasyBase {
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A workspace doesn't exist at this location.
     */
    error?: Record<string, any>;
    /**
     * The list of projects in this workspace.
     */
    paginatedProjects?: shared.PaginatedProjects;
}
