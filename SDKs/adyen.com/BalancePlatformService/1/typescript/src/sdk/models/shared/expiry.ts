/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Expiry extends SpeakeasyBase {
  /**
   * The month in which the card will expire.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "month" })
  month?: string;

  /**
   * The year in which the card will expire.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "year" })
  year?: string;
}
