/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UpdateKeyDescriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Description" })
  description: string;

  @SpeakeasyMetadata()
  @Expose({ name: "KeyId" })
  keyId: string;
}
