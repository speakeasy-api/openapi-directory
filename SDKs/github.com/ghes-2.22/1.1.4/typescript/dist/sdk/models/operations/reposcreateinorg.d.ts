import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
 *
 * @remarks
 * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
 */
export declare enum ReposCreateInOrgRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Internal = "internal"
}
export declare class ReposCreateInOrgRequestBody extends SpeakeasyBase {
    /**
     * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
     */
    allowMergeCommit?: boolean;
    /**
     * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
     */
    allowRebaseMerge?: boolean;
    /**
     * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
     */
    allowSquashMerge?: boolean;
    /**
     * Pass `true` to create an initial commit with empty README.
     */
    autoInit?: boolean;
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
    /**
     * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
     */
    gitignoreTemplate?: string;
    /**
     * Either `true` to enable issues for this repository or `false` to disable them.
     */
    hasIssues?: boolean;
    /**
     * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
     */
    hasProjects?: boolean;
    /**
     * Either `true` to enable the wiki for this repository or `false` to disable it.
     */
    hasWiki?: boolean;
    /**
     * A URL with more information about the repository.
     */
    homepage?: string;
    /**
     * Either `true` to make this repo available as a template repository or `false` to prevent it.
     */
    isTemplate?: boolean;
    /**
     * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://help.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
     */
    licenseTemplate?: string;
    /**
     * The name of the repository.
     */
    name: string;
    /**
     * Whether the repository is private.
     */
    private?: boolean;
    /**
     * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
     */
    teamId?: number;
    /**
     * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
     *
     * @remarks
     * The `visibility` parameter overrides the `private` parameter when you use both parameters with the `nebula-preview` preview header.
     */
    visibility?: ReposCreateInOrgRequestBodyVisibilityEnum;
}
export declare class ReposCreateInOrgRequest extends SpeakeasyBase {
    requestBody: ReposCreateInOrgRequestBody;
    org: string;
}
export declare class ReposCreateInOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    repository?: shared.Repository;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
