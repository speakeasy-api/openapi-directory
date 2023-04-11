import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * Instead of returning the file's contents, return the (json) meta data for it.
 */
export declare enum GetRepositoriesWorkspaceRepoSlugSrcFormatEnum {
    Meta = "meta"
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
    /**
     * Instead of returning the file's contents, return the (json) meta data for it.
     */
    format?: GetRepositoriesWorkspaceRepoSlugSrcFormatEnum;
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
export declare class GetRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * If the path or commit in the URL does not exist.
     */
    error?: Record<string, any>;
    /**
     * If the path matches a file, then the raw contents of the file are
     *
     * @remarks
     * returned (unless the `format=meta` query parameter was provided,
     * in which case a json document containing the file's meta data is
     * returned). If the path matches a directory, then a paginated
     * list of file and directory entries is returned (if the
     * `format=meta` query parameter was provided, then the json document
     * containing the directory's meta data is returned).
     *
     */
    paginatedTreeentries?: shared.PaginatedTreeentries;
}
