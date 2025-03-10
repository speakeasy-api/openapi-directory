/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Response
 */
export class EnterpriseMilestoneOverview extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "closed_milestones" })
  closedMilestones: number;

  @SpeakeasyMetadata()
  @Expose({ name: "open_milestones" })
  openMilestones: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_milestones" })
  totalMilestones: number;
}
