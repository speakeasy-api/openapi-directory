/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class WorkTypeApiNewFormRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "request, media_type=application/x-www-form-urlencoded",
  })
  workTypeCreateApiModel: shared.WorkTypeCreateApiModel;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-key",
  })
  xAuthKey: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-secret",
  })
  xAuthSecret: string;
}

export class WorkTypeApiNewFormResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  workTypeApiNewForm200ApplicationJSONInt32Integer?: number;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  workTypeApiNewForm200TextJSONInt32Integer?: number;
}
