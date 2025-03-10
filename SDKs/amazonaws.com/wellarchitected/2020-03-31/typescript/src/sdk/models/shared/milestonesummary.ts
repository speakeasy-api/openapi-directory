/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A milestone summary return object.
 */
export class MilestoneSummary extends SpeakeasyBase {
  /**
   * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "MilestoneName" })
  milestoneName?: string;

  /**
   * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
   */
  @SpeakeasyMetadata()
  @Expose({ name: "MilestoneNumber" })
  milestoneNumber?: number;

  /**
   * The date and time recorded.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "RecordedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  recordedAt?: Date;

  /**
   * A workload summary return object.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "WorkloadSummary" })
  @Type(() => WorkloadSummary)
  workloadSummary?: WorkloadSummary;
}
