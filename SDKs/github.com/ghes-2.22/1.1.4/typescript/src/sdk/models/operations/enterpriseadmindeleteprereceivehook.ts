/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class EnterpriseAdminDeletePreReceiveHookRequest extends SpeakeasyBase {
  /**
   * pre_receive_hook_id parameter
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pre_receive_hook_id",
  })
  preReceiveHookId: number;
}

export class EnterpriseAdminDeletePreReceiveHookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
