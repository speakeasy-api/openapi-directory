/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Recurring } from "./recurring";
import { Expose, Type } from "class-transformer";

export class RecurringDetailsRequest extends SpeakeasyBase {
  /**
   * The merchant account identifier you want to process the (transaction) request with.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "merchantAccount" })
  merchantAccount: string;

  @SpeakeasyMetadata()
  @Expose({ name: "recurring" })
  @Type(() => Recurring)
  recurring?: Recurring;

  /**
   * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shopperReference" })
  shopperReference: string;
}
