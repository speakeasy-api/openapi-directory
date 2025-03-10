/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Team } from "./team";
import { Expose, Type } from "class-transformer";

/**
 * Teams List
 */
export class TeamList extends SpeakeasyBase {
  /**
   * Total sum of items in the list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sum" })
  sum: number;

  /**
   * List of teams.
   */
  @SpeakeasyMetadata({ elemType: Team })
  @Expose({ name: "teams" })
  @Type(() => Team)
  teams: Team[];
}
