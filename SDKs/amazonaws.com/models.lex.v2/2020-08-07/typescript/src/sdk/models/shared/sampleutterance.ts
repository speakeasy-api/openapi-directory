/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A sample utterance that invokes an intent or respond to a slot elicitation prompt.
 */
export class SampleUtterance extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "utterance" })
  utterance: string;
}
