import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
    /**
     * The repository that is to be created. Note that most object elements are optional. Elements "owner" and "full_name" are ignored as the URL implies them.
     */
    requestBody?: Record<string, any>;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the input document was invalid, or if the caller lacks the privilege to create repositories under the targeted account.
     */
    error?: Record<string, any>;
    /**
     * The newly created repository.
     */
    repository?: Record<string, any>;
}
