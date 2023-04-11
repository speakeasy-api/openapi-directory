import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity extends SpeakeasyBase {
    apiKey?: string;
    basic?: shared.SchemeBasic;
    oauth2?: string;
}
/**
 * If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.
 */
export declare enum GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum {
    Meta = "meta",
    Rendered = "rendered"
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest extends SpeakeasyBase {
    /**
     * The commit's SHA1.
     */
    commit: string;
    /**
     * If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.
     */
    format?: GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum;
    /**
     * If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.
     */
    maxDepth?: number;
    /**
     * Path to the file.
     */
    path: string;
    /**
     * Optional filter expression as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
     */
    q?: string;
    /**
     * This can either be the repository slug or the UUID of the repository,
     *
     * @remarks
     * surrounded by curly-braces, for example: `{repository UUID}`.
     *
     */
    repoSlug: string;
    /**
     * Optional sorting parameter as per [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
     */
    sort?: string;
    /**
     * This can either be the workspace ID (slug) or the workspace UUID
     *
     * @remarks
     * surrounded by curly-braces, for example: `{workspace UUID}`.
     *
     */
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse extends SpeakeasyBase {
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
     * returned.  If the `format=meta` query parameter is provided,
     * a json document containing the file's meta data is
     * returned.  If the `format=rendered` query parameter is provided,
     * the contents of the file in HTML-formated rendered markup is returned.
     * If the path matches a directory, then a paginated
     * list of file and directory entries is returned (if the
     * `format=meta` query parameter was provided, then the json document
     * containing the directory's meta data is returned.)
     *
     */
    paginatedTreeentries?: shared.PaginatedTreeentries;
}
