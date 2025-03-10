/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ClientApiAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-key",
  })
  xAuthKey: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-auth-secret",
  })
  xAuthSecret: string;
}

export class ClientApiAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  /**
   * OK
   */
  @SpeakeasyMetadata({ elemType: shared.ClientDetailsApiModel })
  clientDetailsApiModels?: shared.ClientDetailsApiModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
