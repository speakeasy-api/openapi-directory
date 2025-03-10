/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class FraudCheckResult extends SpeakeasyBase {
  /**
   * The fraud score generated by the risk check.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "accountScore" })
  accountScore: number;

  /**
   * The ID of the risk check.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "checkId" })
  checkId: number;

  /**
   * The name of the risk check.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;
}
