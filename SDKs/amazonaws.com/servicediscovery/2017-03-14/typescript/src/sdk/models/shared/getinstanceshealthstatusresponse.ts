/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { HealthStatusEnum } from "./healthstatusenum";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class GetInstancesHealthStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: Record<string, HealthStatusEnum>;
}
