import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnippetsWorkspaceSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
 */
export declare enum GetSnippetsWorkspaceRoleEnum {
    Owner = "owner",
    Contributor = "contributor",
    Member = "member"
}
export declare class GetSnippetsWorkspaceRequest extends SpeakeasyBase {
    /**
     * Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
     */
    role?: GetSnippetsWorkspaceRoleEnum;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetSnippetsWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the user does not exist.
     */
    error?: Record<string, any>;
    /**
     * A paginated list of snippets.
     */
    paginatedSnippets?: shared.PaginatedSnippets;
}
