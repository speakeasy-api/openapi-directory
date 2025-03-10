/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * OK - the request has succeeded.
 */
export class SubmitResponse extends SpeakeasyBase {
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
   * In case of refusal, an informational message for the reason.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "refusalReason" })
  refusalReason?: string;

  /**
   * The response:
   *
   * @remarks
   * * In case of success, it is `payout-submit-received`.
   * * In case of an error, an informational message is returned.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resultCode" })
  resultCode: string;
}
