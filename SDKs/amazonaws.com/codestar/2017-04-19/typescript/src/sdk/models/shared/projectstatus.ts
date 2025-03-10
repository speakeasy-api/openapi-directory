/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * An indication of whether a project creation or deletion is failed or successful.
 */
export class ProjectStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state: string;
}
