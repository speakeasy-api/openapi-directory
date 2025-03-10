/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class WebHookManagementDeleteAllResponse extends SpeakeasyBase {
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
  webHookManagementDeleteAll200ApplicationJSONObject?: Record<string, any>;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  webHookManagementDeleteAll200TextJSONObject?: Record<string, any>;
}
