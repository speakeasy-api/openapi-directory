/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SnapshotLifecycleEnum } from "./snapshotlifecycleenum";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class DeleteSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Lifecycle" })
  lifecycle?: SnapshotLifecycleEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "SnapshotId" })
  snapshotId?: string;
}
