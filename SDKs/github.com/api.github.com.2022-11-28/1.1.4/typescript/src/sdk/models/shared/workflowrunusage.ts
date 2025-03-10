/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class WorkflowRunUsageBillableMACOSJobRuns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_ms" })
  durationMs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "job_id" })
  jobId: number;
}

export class WorkflowRunUsageBillableMACOS extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WorkflowRunUsageBillableMACOSJobRuns })
  @Expose({ name: "job_runs" })
  @Type(() => WorkflowRunUsageBillableMACOSJobRuns)
  jobRuns?: WorkflowRunUsageBillableMACOSJobRuns[];

  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_ms" })
  totalMs: number;
}

export class WorkflowRunUsageBillableUBUNTUJobRuns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_ms" })
  durationMs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "job_id" })
  jobId: number;
}

export class WorkflowRunUsageBillableUBUNTU extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WorkflowRunUsageBillableUBUNTUJobRuns })
  @Expose({ name: "job_runs" })
  @Type(() => WorkflowRunUsageBillableUBUNTUJobRuns)
  jobRuns?: WorkflowRunUsageBillableUBUNTUJobRuns[];

  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_ms" })
  totalMs: number;
}

export class WorkflowRunUsageBillableWINDOWSJobRuns extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "duration_ms" })
  durationMs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "job_id" })
  jobId: number;
}

export class WorkflowRunUsageBillableWINDOWS extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: WorkflowRunUsageBillableWINDOWSJobRuns })
  @Expose({ name: "job_runs" })
  @Type(() => WorkflowRunUsageBillableWINDOWSJobRuns)
  jobRuns?: WorkflowRunUsageBillableWINDOWSJobRuns[];

  @SpeakeasyMetadata()
  @Expose({ name: "jobs" })
  jobs: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total_ms" })
  totalMs: number;
}

export class WorkflowRunUsageBillable extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "MACOS" })
  @Type(() => WorkflowRunUsageBillableMACOS)
  macos?: WorkflowRunUsageBillableMACOS;

  @SpeakeasyMetadata()
  @Expose({ name: "UBUNTU" })
  @Type(() => WorkflowRunUsageBillableUBUNTU)
  ubuntu?: WorkflowRunUsageBillableUBUNTU;

  @SpeakeasyMetadata()
  @Expose({ name: "WINDOWS" })
  @Type(() => WorkflowRunUsageBillableWINDOWS)
  windows?: WorkflowRunUsageBillableWINDOWS;
}

/**
 * Workflow Run Usage
 */
export class WorkflowRunUsage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "billable" })
  @Type(() => WorkflowRunUsageBillable)
  billable: WorkflowRunUsageBillable;

  @SpeakeasyMetadata()
  @Expose({ name: "run_duration_ms" })
  runDurationMs?: number;
}
