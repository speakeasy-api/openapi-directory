/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RecordFormatTypeEnum } from "./recordformattypeenum";
import { Expose } from "class-transformer";

/**
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
 */
export class DestinationSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "RecordFormatType" })
  recordFormatType: RecordFormatTypeEnum;
}
