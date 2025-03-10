/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * <p>Current resource utilization statistics in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.</p> <p> <b>Related actions</b> </p>
 */
export class FleetUtilization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ActiveGameSessionCount" })
  activeGameSessionCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "ActiveServerProcessCount" })
  activeServerProcessCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "CurrentPlayerSessionCount" })
  currentPlayerSessionCount?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Location" })
  location?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "MaximumPlayerSessionCount" })
  maximumPlayerSessionCount?: number;
}
