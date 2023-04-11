import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserRequest extends SpeakeasyBase {
    /**
     * The project in question. This can either be the actual `key` assigned
     *
     * @remarks
     * to the project or the `UUID` (surrounded by curly-braces (`{}`)).
     *
     */
    projectKey: string;
    /**
     * This can either be the username or the UUID of the default reviewer,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{account UUID}`.
     *
     */
    selectedUser: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetWorkspacesWorkspaceProjectsProjectKeyDefaultReviewersSelectedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the specified user is not a default reviewer for the project
     */
    error?: Record<string, any>;
    /**
     * The specified user that is a default reviewer
     */
    user?: Record<string, any>;
}
