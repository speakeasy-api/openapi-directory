/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RotationShift } from "./rotationshift";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListPreviewRotationShiftsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ elemType: RotationShift })
  @Expose({ name: "RotationShifts" })
  @Type(() => RotationShift)
  rotationShifts?: RotationShift[];
}
