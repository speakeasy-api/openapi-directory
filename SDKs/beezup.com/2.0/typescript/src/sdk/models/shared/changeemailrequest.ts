/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class ChangeEmailRequest extends SpeakeasyBase {
  /**
   * The email
   */
  @SpeakeasyMetadata()
  @Expose({ name: "newEmail" })
  newEmail: string;
}
