/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ReposCreateForAuthenticatedUserRequestBody extends SpeakeasyBase {
  /**
   * Whether to allow merge commits for pull requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_merge_commit" })
  allowMergeCommit?: boolean;

  /**
   * Whether to allow rebase merges for pull requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_rebase_merge" })
  allowRebaseMerge?: boolean;

  /**
   * Whether to allow squash merges for pull requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_squash_merge" })
  allowSquashMerge?: boolean;

  /**
   * Whether the repository is initialized with a minimal README.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auto_init" })
  autoInit?: boolean;

  /**
   * Whether to delete head branches when pull requests are merged
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
   * The desired language or platform to apply to the .gitignore.
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
   * Whether issues are enabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_issues" })
  hasIssues?: boolean;

  /**
   * Whether projects are enabled.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_projects" })
  hasProjects?: boolean;

  /**
   * Whether the wiki is enabled.
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
   * Whether this repository acts as a template that can be used to generate new repositories.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "is_template" })
  isTemplate?: boolean;

  /**
   * The license keyword of the open source license for this repository.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "license_template" })
  licenseTemplate?: string;

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
   * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "team_id" })
  teamId?: number;
}

export class ReposCreateForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  repository?: shared.Repository;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
