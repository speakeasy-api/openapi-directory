/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { VersionControlTypeEnum } from "./versioncontroltypeenum";
import { Expose } from "class-transformer";

/**
 * Details about the version control configuration.
 */
export class VersionControlInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "versionControlConfigurationTimeStamp" })
  versionControlConfigurationTimeStamp?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "versionControlType" })
  versionControlType?: VersionControlTypeEnum;
}
