/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ReposGetDeploymentStatusRequest extends SpeakeasyBase {
  /**
   * deployment_id parameter
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=deployment_id",
  })
  deploymentId: number;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=status_id",
  })
  statusId: number;
}

/**
 * Preview header missing
 */
export class ReposGetDeploymentStatus415ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;
}

export class ReposGetDeploymentStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Resource not found
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  deploymentStatus?: shared.DeploymentStatus;

  /**
   * Preview header missing
   */
  @SpeakeasyMetadata()
  reposGetDeploymentStatus415ApplicationJSONObject?: ReposGetDeploymentStatus415ApplicationJSON;
}
