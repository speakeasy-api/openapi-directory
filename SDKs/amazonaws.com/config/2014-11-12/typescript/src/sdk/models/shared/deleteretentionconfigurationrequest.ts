/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DeleteRetentionConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "RetentionConfigurationName" })
  retentionConfigurationName: string;
}
