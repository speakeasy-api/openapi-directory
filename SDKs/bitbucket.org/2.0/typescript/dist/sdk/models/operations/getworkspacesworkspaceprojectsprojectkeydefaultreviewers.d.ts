import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersRequest extends SpeakeasyBase {
    /**
     * The project in question. This is the actual `key` assigned
     *
     * @remarks
     * to the project.
     *
     */
    projectKey: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have admin access to the project
     */
    error?: Record<string, any>;
    /**
     * The list of project default reviewers
     */
    paginatedDefaultReviewerAndType?: shared.PaginatedDefaultReviewerAndType;
}
