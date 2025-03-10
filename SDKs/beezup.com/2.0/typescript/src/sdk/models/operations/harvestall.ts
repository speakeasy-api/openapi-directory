/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class HarvestAllRequest extends SpeakeasyBase {
  /**
   * The StoreId to filter by
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=storeId",
  })
  storeId?: string;
}

export class HarvestAllResponse extends SpeakeasyBase {
  /**
   * Requested Store could not be found
   */
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
