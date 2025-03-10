/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProfilingGroupDescription } from "./profilinggroupdescription";
import { Expose, Type } from "class-transformer";

/**
 * The structure representing the describeProfilingGroupResponse.
 */
export class DescribeProfilingGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "profilingGroup" })
  @Type(() => ProfilingGroupDescription)
  profilingGroup: ProfilingGroupDescription;
}
