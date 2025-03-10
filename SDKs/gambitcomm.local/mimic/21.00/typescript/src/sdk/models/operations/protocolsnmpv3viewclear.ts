/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ProtocolSnmpv3ViewClearRequest extends SpeakeasyBase {
  /**
   * Agent to add the SNMPv3 view
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=agentNum",
  })
  agentNum: number;
}

export class ProtocolSnmpv3ViewClearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * successful operation
   */
  @SpeakeasyMetadata()
  protocolSnmpv3ViewClear200ApplicationJSONString?: string;
}
