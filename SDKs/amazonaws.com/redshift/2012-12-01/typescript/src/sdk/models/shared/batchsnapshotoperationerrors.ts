/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Describes the errors returned by a snapshot.
 */
export class BatchSnapshotOperationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureReason?: string;

  @SpeakeasyMetadata()
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;
}
