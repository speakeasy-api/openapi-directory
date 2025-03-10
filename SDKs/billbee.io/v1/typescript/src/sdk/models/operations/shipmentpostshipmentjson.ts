/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class ShipmentPostShipmentJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  shipmentPostShipmentJSON200ApplicationJSONObject?: Record<string, any>;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  shipmentPostShipmentJSON200TextJSONObject?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
