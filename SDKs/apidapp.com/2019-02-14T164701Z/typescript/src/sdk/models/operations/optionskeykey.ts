/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class OptionsKeyKeyRequest extends SpeakeasyBase {
  /**
   * Automatically added
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}

export class OptionsKeyKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * 200 response
   */
  @SpeakeasyMetadata()
  empty?: Record<string, any>;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
