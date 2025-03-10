/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetSSHKeyRequest extends SpeakeasyBase {
  /**
   * Access token required to make the API call.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=ev-access-token",
  })
  evAccessToken: string;

  /**
   * API key required to make the API call.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=ev-api-key",
  })
  evApiKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetSSHKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Successful Operation
   */
  @SpeakeasyMetadata()
  sshKeyResponse?: shared.SSHKeyResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
