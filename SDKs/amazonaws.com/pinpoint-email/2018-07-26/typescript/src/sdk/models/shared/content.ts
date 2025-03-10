/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An object that represents the content of the email, and optionally a character set specification.
 */
export class Content extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Charset" })
  charset?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Data" })
  data: string;
}
