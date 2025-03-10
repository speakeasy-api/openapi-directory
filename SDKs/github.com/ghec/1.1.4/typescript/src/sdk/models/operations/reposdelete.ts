/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class ReposDeleteRequest extends SpeakeasyBase {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

/**
 * If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:
 */
export class ReposDelete403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class ReposDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Temporary Redirect
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * If an organization owner has configured the organization to prevent members from deleting organization-owned repositories, a member will get this response:
   */
  @SpeakeasyMetadata()
  reposDelete403ApplicationJSONObject?: ReposDelete403ApplicationJSON;
}
