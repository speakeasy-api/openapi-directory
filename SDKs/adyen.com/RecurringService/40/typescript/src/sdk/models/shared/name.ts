/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Name extends SpeakeasyBase {
  /**
   * The first name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "firstName" })
  firstName: string;

  /**
   * The last name.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lastName" })
  lastName: string;
}
