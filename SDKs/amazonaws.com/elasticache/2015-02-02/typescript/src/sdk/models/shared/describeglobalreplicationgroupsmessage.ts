/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class DescribeGlobalReplicationGroupsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  globalReplicationGroupId?: string;

  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata()
  maxRecords?: number;

  @SpeakeasyMetadata()
  showMemberInfo?: boolean;
}
