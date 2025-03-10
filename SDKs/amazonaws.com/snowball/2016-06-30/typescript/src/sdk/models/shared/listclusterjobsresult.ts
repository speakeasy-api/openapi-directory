/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobListEntry } from "./joblistentry";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListClusterJobsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: JobListEntry })
  @Expose({ name: "JobListEntries" })
  @Type(() => JobListEntry)
  jobListEntries?: JobListEntry[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
