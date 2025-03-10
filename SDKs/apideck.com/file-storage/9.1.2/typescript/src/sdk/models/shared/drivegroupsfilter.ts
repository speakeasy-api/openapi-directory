/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * Apply filters
 */
export class DriveGroupsFilter extends SpeakeasyBase {
  /**
   * ID of the drive group to filter on
   */
  @SpeakeasyMetadata({ data: "queryParam, name=parent_group_id" })
  parentGroupId?: string;
}
