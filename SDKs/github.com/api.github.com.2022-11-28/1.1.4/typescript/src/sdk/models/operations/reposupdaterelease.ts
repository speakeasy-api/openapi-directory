/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
 */
export enum ReposUpdateReleaseRequestBodyMakeLatestEnum {
  True = "true",
  False = "false",
  Legacy = "legacy",
}

export class ReposUpdateReleaseRequestBody extends SpeakeasyBase {
  /**
   * Text describing the contents of the tag.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "body" })
  body?: string;

  /**
   * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
   */
  @SpeakeasyMetadata()
  @Expose({ name: "discussion_category_name" })
  discussionCategoryName?: string;

  /**
   * `true` makes the release a draft, and `false` publishes the release.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "draft" })
  draft?: boolean;

  /**
   * Specifies whether this release should be set as the latest release for the repository. Drafts and prereleases cannot be set as latest. Defaults to `true` for newly published releases. `legacy` specifies that the latest release should be determined based on the release creation date and higher semantic version.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "make_latest" })
  makeLatest?: ReposUpdateReleaseRequestBodyMakeLatestEnum;

  /**
   * The name of the release.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  /**
   * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "prerelease" })
  prerelease?: boolean;

  /**
   * The name of the tag.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "tag_name" })
  tagName?: string;

  /**
   * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target_commitish" })
  targetCommitish?: string;
}

export class ReposUpdateReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: ReposUpdateReleaseRequestBody;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The unique identifier of the release.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=release_id",
  })
  releaseId: number;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class ReposUpdateReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Not Found if the discussion category name is invalid
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  release?: shared.Release;
}
