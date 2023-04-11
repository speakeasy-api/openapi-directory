import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
 */
export declare enum ReposCreateReleaseRequestBodyMakeLatestEnum {
    True = "true",
    False = "false",
    Legacy = "legacy"
}
export declare class ReposCreateReleaseRequestBody extends SpeakeasyBase {
    /**
     * Text describing the contents of the tag.
     */
    body?: string;
    /**
     * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/enterprise-cloud@latest//discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
     */
    discussionCategoryName?: string;
    /**
     * `true` to create a draft (unpublished) release, `false` to create a published one.
     */
    draft?: boolean;
    /**
     * Whether to automatically generate the name and body for this release. If `name` is specified, the specified name will be used; otherwise, a name will be automatically generated. If `body` is specified, the body will be pre-pended to the automatically generated notes.
     */
    generateReleaseNotes?: boolean;
    /**
     * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
     */
    makeLatest?: ReposCreateReleaseRequestBodyMakeLatestEnum;
    /**
     * The name of the release.
     */
    name?: string;
    /**
     * `true` to identify the release as a prerelease. `false` to identify the release as a full release.
     */
    prerelease?: boolean;
    /**
     * The name of the tag.
     */
    tagName: string;
    /**
     * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
     */
    targetCommitish?: string;
}
export declare class ReposCreateReleaseRequest extends SpeakeasyBase {
    requestBody: ReposCreateReleaseRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateReleaseResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
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
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
