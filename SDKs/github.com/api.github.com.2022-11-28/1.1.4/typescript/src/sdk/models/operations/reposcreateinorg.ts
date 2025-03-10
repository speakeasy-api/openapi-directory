/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * The default value for a merge commit message.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `PR_BODY` - default to the pull request's body.
 * - `BLANK` - default to a blank commit message.
 */
export enum ReposCreateInOrgRequestBodyMergeCommitMessageEnum {
  PrBody = "PR_BODY",
  PrTitle = "PR_TITLE",
  Blank = "BLANK",
}

/**
 * The default value for a merge commit title.
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
 */
export enum ReposCreateInOrgRequestBodyMergeCommitTitleEnum {
  PrTitle = "PR_TITLE",
  MergeMessage = "MERGE_MESSAGE",
}

/**
 * The default value for a squash merge commit message:
 *
 * @remarks
 *
 * - `PR_BODY` - default to the pull request's body.
 * - `COMMIT_MESSAGES` - default to the branch's commit messages.
 * - `BLANK` - default to a blank commit message.
 */
export enum ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum {
  PrBody = "PR_BODY",
  CommitMessages = "COMMIT_MESSAGES",
  Blank = "BLANK",
}

/**
 * The default value for a squash merge commit title:
 *
 * @remarks
 *
 * - `PR_TITLE` - default to the pull request's title.
 * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
 */
export enum ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum {
  PrTitle = "PR_TITLE",
  CommitOrPrTitle = "COMMIT_OR_PR_TITLE",
}

/**
 * The visibility of the repository.
 */
export enum ReposCreateInOrgRequestBodyVisibilityEnum {
  Public = "public",
  Private = "private",
}

export class ReposCreateInOrgRequestBody extends SpeakeasyBase {
  /**
   * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_auto_merge" })
  allowAutoMerge?: boolean;

  /**
   * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_merge_commit" })
  allowMergeCommit?: boolean;

  /**
   * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  /**
   * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_squash_merge" })
  allowSquashMerge?: boolean;

  /**
   * Pass `true` to create an initial commit with empty README.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auto_init" })
  autoInit?: boolean;

  /**
   * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion. **The authenticated user must be an organization owner to set this property to `true`.**
   */
  @SpeakeasyMetadata()
  @Expose({ name: "delete_branch_on_merge" })
  deleteBranchOnMerge?: boolean;

  /**
   * A short description of the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description?: string;

  /**
   * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gitignore_template" })
  gitignoreTemplate?: string;

  /**
   * Whether downloads are enabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_downloads" })
  hasDownloads?: boolean;

  /**
   * Either `true` to enable issues for this repository or `false` to disable them.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_issues" })
  hasIssues?: boolean;

  /**
   * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_projects" })
  hasProjects?: boolean;

  /**
   * Either `true` to enable the wiki for this repository or `false` to disable it.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_wiki" })
  hasWiki?: boolean;

  /**
   * A URL with more information about the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "homepage" })
  homepage?: string;

  /**
   * Either `true` to make this repo available as a template repository or `false` to prevent it.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_template" })
  isTemplate?: boolean;

  /**
   * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
   */
  @SpeakeasyMetadata()
  @Expose({ name: "license_template" })
  licenseTemplate?: string;

  /**
   * The default value for a merge commit message.
   *
   * @remarks
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `PR_BODY` - default to the pull request's body.
   * - `BLANK` - default to a blank commit message.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merge_commit_message" })
  mergeCommitMessage?: ReposCreateInOrgRequestBodyMergeCommitMessageEnum;

  /**
   * The default value for a merge commit title.
   *
   * @remarks
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `MERGE_MESSAGE` - default to the classic title for a merge message (e.g., Merge pull request #123 from branch-name).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merge_commit_title" })
  mergeCommitTitle?: ReposCreateInOrgRequestBodyMergeCommitTitleEnum;

  /**
   * The name of the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Whether the repository is private.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "private" })
  private?: boolean;

  /**
   * The default value for a squash merge commit message:
   *
   * @remarks
   *
   * - `PR_BODY` - default to the pull request's body.
   * - `COMMIT_MESSAGES` - default to the branch's commit messages.
   * - `BLANK` - default to a blank commit message.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "squash_merge_commit_message" })
  squashMergeCommitMessage?: ReposCreateInOrgRequestBodySquashMergeCommitMessageEnum;

  /**
   * The default value for a squash merge commit title:
   *
   * @remarks
   *
   * - `PR_TITLE` - default to the pull request's title.
   * - `COMMIT_OR_PR_TITLE` - default to the commit's title (if only one commit) or the pull request's title (when more than one commit).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "squash_merge_commit_title" })
  squashMergeCommitTitle?: ReposCreateInOrgRequestBodySquashMergeCommitTitleEnum;

  /**
   * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId?: number;

  /**
   * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message. **This property has been deprecated. Please use `squash_merge_commit_title` instead.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "use_squash_pr_title_as_default" })
  useSquashPrTitleAsDefault?: boolean;

  /**
   * The visibility of the repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "visibility" })
  visibility?: ReposCreateInOrgRequestBodyVisibilityEnum;
}

export class ReposCreateInOrgRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: ReposCreateInOrgRequestBody;

  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export class ReposCreateInOrgResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  repository?: shared.Repository;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
