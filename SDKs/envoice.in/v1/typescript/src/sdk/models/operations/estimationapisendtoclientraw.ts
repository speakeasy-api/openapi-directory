/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EstimationApiSendToClientRawRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  requestBody: Uint8Array;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-key",
  })
  xAuthKey: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-secret",
  })
  xAuthSecret: string;
}

export class EstimationApiSendToClientRawResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  estimationApiSendToClientRaw200ApplicationJSONInt32Integer?: number;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  estimationApiSendToClientRaw200TextJSONInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
