import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffRequest extends SpeakeasyBase {
    /**
     * The snippet id.
     */
    encodedId: string;
    /**
     * When used, only one the diff of the specified file will be returned.
     */
    path?: string;
    /**
     * A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
     */
    revision: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionDiffResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the authenticated user does not have access to the snippet.
     */
    error?: Record<string, any>;
}
