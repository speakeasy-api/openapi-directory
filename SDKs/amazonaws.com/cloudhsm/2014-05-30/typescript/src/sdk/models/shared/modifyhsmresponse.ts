/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Contains the output of the <a>ModifyHsm</a> operation.
 */
export class ModifyHsmResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "HsmArn" })
  hsmArn?: string;
}
