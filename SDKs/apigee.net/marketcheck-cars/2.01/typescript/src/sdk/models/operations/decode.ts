/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DecodeRequest extends SpeakeasyBase {
  /**
   * The API Authentication Key. Mandatory with all API calls.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api_key",
  })
  apiKey?: string;

  /**
   * The VIN to identify the car. Must be a valid 17 char VIN
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=vin" })
  vin: string;
}

export class DecodeResponse extends SpeakeasyBase {
  /**
   * Basic sepcifications details about the car
   */
  @SpeakeasyMetadata()
  build?: shared.Build;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
