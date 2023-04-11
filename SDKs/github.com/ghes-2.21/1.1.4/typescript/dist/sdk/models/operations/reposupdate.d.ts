import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
 */
export declare enum ReposUpdateRequestBodyVisibilityEnum {
    Public = "public",
    Private = "private",
    Visibility = "visibility",
    Internal = "internal"
}
export declare class ReposUpdateRequestBody extends SpeakeasyBase {
    /**
     * Either `true` to allow private forks, or `false` to prevent private forks.
     */
    allowForking?: boolean;
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
     * `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
     */
    archived?: boolean;
    /**
     * Updates the default branch for this repository.
     */
    defaultBranch?: string;
    /**
     * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
     */
    deleteBranchOnMerge?: boolean;
    /**
     * A short description of the repository.
     */
    description?: string;
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
     * The name of the repository.
     */
    name?: string;
    /**
     * Either `true` to make the repository private or `false` to make it public. Default: `false`.
     *
     * @remarks
     * **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private. **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://help.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
     */
    private?: boolean;
    /**
     * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. The `visibility` parameter overrides the `private` parameter when you use both along with the `nebula-preview` preview header.
     */
    visibility?: ReposUpdateRequestBodyVisibilityEnum;
}
export declare class ReposUpdateRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateRequestBody;
    owner: string;
    repo: string;
}
export declare class ReposUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Temporary Redirect
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    fullRepository?: shared.FullRepository;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
