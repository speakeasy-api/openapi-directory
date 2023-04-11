import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
 */
export declare enum ReposUpdateReleaseRequestBodyMakeLatestEnum {
    True = "true",
    False = "false",
    Legacy = "legacy"
}
export declare class ReposUpdateReleaseRequestBody extends SpeakeasyBase {
    /**
     * Text describing the contents of the tag.
     */
    body?: string;
    /**
     * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/enterprise-cloud@latest//discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
     */
    discussionCategoryName?: string;
    /**
     * `true` makes the release a draft, and `false` publishes the release.
     */
    draft?: boolean;
    /**
     * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
     */
    makeLatest?: ReposUpdateReleaseRequestBodyMakeLatestEnum;
    /**
     * The name of the release.
     */
    name?: string;
    /**
     * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
     */
    prerelease?: boolean;
    /**
     * The name of the tag.
     */
    tagName?: string;
    /**
     * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
     */
    targetCommitish?: string;
}
export declare class ReposUpdateReleaseRequest extends SpeakeasyBase {
    requestBody?: ReposUpdateReleaseRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The unique identifier of the release.
     */
    releaseId: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposUpdateReleaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Not Found if the discussion category name is invalid
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    release?: shared.Release;
}
