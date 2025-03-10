/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK - the request has succeeded.
 */
export class StoreDetailResponse extends SpeakeasyBase {
  /**
   * This field contains additional data, which may be returned in a particular response.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additionalData" })
  additionalData?: Record<string, string>;

  /**
   * A new reference to uniquely identify this request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pspReference" })
  pspReference: string;

  /**
   * The token which you can use later on for submitting the payout.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "recurringDetailReference" })
  recurringDetailReference: string;

  /**
   * The result code of the transaction. `Success` indicates that the details were stored successfully.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resultCode" })
  resultCode: string;
}
