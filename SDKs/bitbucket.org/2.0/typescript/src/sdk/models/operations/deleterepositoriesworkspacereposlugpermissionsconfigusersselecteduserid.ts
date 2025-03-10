/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=apiKey;subtype=header;name=Authorization",
  })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2?: string;
}

export class DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdRequest extends SpeakeasyBase {
  /**
   * This can either be the repository slug or the UUID of the repository,
   *
   * @remarks
   * surrounded by curly-braces, for example: `{repository UUID}`.
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo_slug",
  })
  repoSlug: string;

  /**
   * This can either be the UUID of the account, surrounded by curly-braces, for
   *
   * @remarks
   * example: `{account UUID}`, OR an Atlassian Account ID.
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=selected_user_id",
  })
  selectedUserId: string;

  /**
   * This can either be the workspace ID (slug) or the workspace UUID
   *
   * @remarks
   * surrounded by curly-braces, for example: `{workspace UUID}`.
   *
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace",
  })
  workspace: string;
}

export class DeleteRepositoriesWorkspaceRepoSlugPermissionsConfigUsersSelectedUserIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * The user couldn't be authenticated.
   */
  @SpeakeasyMetadata()
  error?: Record<string, any>;
}
