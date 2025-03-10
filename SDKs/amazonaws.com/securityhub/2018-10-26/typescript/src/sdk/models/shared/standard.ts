/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { StandardsManagedBy } from "./standardsmanagedby";
import { Expose, Type } from "class-transformer";

/**
 * Provides information about a specific security standard.
 */
export class Standard extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Description" })
  description?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "EnabledByDefault" })
  enabledByDefault?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "StandardsArn" })
  standardsArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "StandardsManagedBy" })
  @Type(() => StandardsManagedBy)
  standardsManagedBy?: StandardsManagedBy;
}
