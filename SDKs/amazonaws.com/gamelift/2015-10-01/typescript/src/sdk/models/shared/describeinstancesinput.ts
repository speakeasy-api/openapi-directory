/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class DescribeInstancesInput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "FleetId" })
  fleetId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Limit" })
  limit?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Location" })
  location?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
