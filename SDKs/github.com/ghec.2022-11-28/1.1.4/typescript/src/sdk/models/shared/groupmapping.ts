/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GroupMappingGroups extends SpeakeasyBase {
  /**
   * a description of the group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "group_description" })
  groupDescription: string;

  /**
   * The ID of the group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "group_id" })
  groupId: string;

  /**
   * The name of the group
   */
  @SpeakeasyMetadata()
  @Expose({ name: "group_name" })
  groupName: string;

  /**
   * synchronization status for this group mapping
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  /**
   * the time of the last sync for this group-mapping
   */
  @SpeakeasyMetadata()
  @Expose({ name: "synced_at" })
  syncedAt?: string;
}

/**
 * External Groups to be mapped to a team for membership
 */
export class GroupMapping extends SpeakeasyBase {
  /**
   * Array of groups to be mapped to this team
   */
  @SpeakeasyMetadata({ elemType: GroupMappingGroups })
  @Expose({ name: "groups" })
  @Type(() => GroupMappingGroups)
  groups?: GroupMappingGroups[];
}
