/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class AppsCheckTokenRequestBody extends SpeakeasyBase {
  /**
   * The access_token of the OAuth application.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken: string;
}

export class AppsCheckTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: AppsCheckTokenRequestBody;

  /**
   * The client ID of your GitHub app.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=client_id",
  })
  clientId: string;
}

export class AppsCheckTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  authorization?: shared.Authorization;

  /**
   * Resource not found
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Validation failed
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
