/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Contains details about a specific Map Run.
 */
export class MapRunListItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "executionArn" })
  executionArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "mapRunArn" })
  mapRunArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "startDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  startDate: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "stateMachineArn" })
  stateMachineArn: string;

  @SpeakeasyMetadata()
  @Expose({ name: "stopDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  stopDate?: Date;
}
