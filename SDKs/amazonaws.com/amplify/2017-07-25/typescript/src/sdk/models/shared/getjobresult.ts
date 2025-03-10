/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Job } from "./job";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class GetJobResult extends SpeakeasyBase {
  /**
   *  Describes an execution job for an Amplify app.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "job" })
  @Type(() => Job)
  job: Job;
}
