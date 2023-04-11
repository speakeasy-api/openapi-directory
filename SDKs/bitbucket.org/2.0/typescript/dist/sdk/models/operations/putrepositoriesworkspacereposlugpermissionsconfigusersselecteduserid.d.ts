import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRequest extends SpeakeasyBase {
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the UUID of the account, surrounded by curly-braces, for
     *
     * @remarks
     * example: `{account UUID}`, OR an Atlassian Account ID.
     *
     */
    selectedUserId: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No permission value was provided or the value is invalid (not one of read, write, or admin), or the selected user is not a valid user to update.
     */
    error?: Record<string, any>;
    /**
     * Explicit user permission updated
     */
    repositoryUserPermission?: Record<string, any>;
}
