/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { JobRun } from "./jobrun";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeJobRunResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "jobRun" })
  @Type(() => JobRun)
  jobRun?: JobRun;
}
