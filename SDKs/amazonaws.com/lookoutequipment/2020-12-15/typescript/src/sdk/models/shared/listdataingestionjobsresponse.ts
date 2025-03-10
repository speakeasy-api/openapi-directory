/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataIngestionJobSummary } from "./dataingestionjobsummary";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListDataIngestionJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DataIngestionJobSummary })
  @Expose({ name: "DataIngestionJobSummaries" })
  @Type(() => DataIngestionJobSummary)
  dataIngestionJobSummaries?: DataIngestionJobSummary[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
