/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Represents the input to <a>DeleteGlobalCluster</a>.
 */
export class DeleteGlobalClusterMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalClusterIdentifier: string;
}
