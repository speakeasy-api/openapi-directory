/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeletePullRequestHostedPropertyValueRequest extends SpeakeasyBase {
  /**
   * The key of the Connect app.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=app_key",
  })
  appKey: string;

  /**
   * The name of the property.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=property_name",
  })
  propertyName: string;

  /**
   * The pull request ID.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pullrequest_id",
  })
  pullrequestId: string;

  /**
   * The repository.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo_slug",
  })
  repoSlug: string;

  /**
   * The repository container; either the workspace slug or the UUID in curly braces.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=workspace",
  })
  workspace: string;
}

export class DeletePullRequestHostedPropertyValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
