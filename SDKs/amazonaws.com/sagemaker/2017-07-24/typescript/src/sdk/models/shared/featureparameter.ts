/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A key-value pair that you specify to describe the feature.
 */
export class FeatureParameter extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Key" })
  key?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Value" })
  value?: string;
}
