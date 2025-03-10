/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class GitCreateRefRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "key" })
  key?: string;

  /**
   * The name of the fully qualified reference (ie: `refs/heads/master`). If it doesn't start with 'refs' and have at least two slashes, it will be rejected.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ref" })
  ref: string;

  /**
   * The SHA1 value for this reference.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sha" })
  sha: string;
}

export class GitCreateRefRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: GitCreateRefRequestBody;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class GitCreateRefResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  gitRef?: shared.GitRef;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
