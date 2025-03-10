/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Range } from "./range";
import { RoomGroup } from "./roomgroup";
import { Expose, Type } from "class-transformer";

/**
 * List of groups
 */
export class RoomGroupList extends SpeakeasyBase {
  /**
   * List of room-group mappings
   */
  @SpeakeasyMetadata({ elemType: RoomGroup })
  @Expose({ name: "items" })
  @Type(() => RoomGroup)
  items: RoomGroup[];

  /**
   * Range information
   */
  @SpeakeasyMetadata()
  @Expose({ name: "range" })
  @Type(() => Range)
  range: Range;
}
