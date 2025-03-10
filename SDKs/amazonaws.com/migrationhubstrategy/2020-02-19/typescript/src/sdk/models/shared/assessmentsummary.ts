/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AntipatternReportStatusEnum } from "./antipatternreportstatusenum";
import { AntipatternSeveritySummary } from "./antipatternseveritysummary";
import { ApplicationComponentStatusSummary } from "./applicationcomponentstatussummary";
import { ApplicationComponentSummary } from "./applicationcomponentsummary";
import { S3Object } from "./s3object";
import { ServerStatusSummary } from "./serverstatussummary";
import { ServerSummary } from "./serversummary";
import { StrategySummary } from "./strategysummary";
import { Expose, Transform, Type } from "class-transformer";

/**
 *  Contains the summary of the assessment results.
 */
export class AssessmentSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportS3Object" })
  @Type(() => S3Object)
  antipatternReportS3Object?: S3Object;

  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportStatus" })
  antipatternReportStatus?: AntipatternReportStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "antipatternReportStatusMessage" })
  antipatternReportStatusMessage?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "lastAnalyzedTimestamp" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastAnalyzedTimestamp?: Date;

  @SpeakeasyMetadata({ elemType: AntipatternSeveritySummary })
  @Expose({ name: "listAntipatternSeveritySummary" })
  @Type(() => AntipatternSeveritySummary)
  listAntipatternSeveritySummary?: AntipatternSeveritySummary[];

  @SpeakeasyMetadata({ elemType: ApplicationComponentStatusSummary })
  @Expose({ name: "listApplicationComponentStatusSummary" })
  @Type(() => ApplicationComponentStatusSummary)
  listApplicationComponentStatusSummary?: ApplicationComponentStatusSummary[];

  @SpeakeasyMetadata({ elemType: StrategySummary })
  @Expose({ name: "listApplicationComponentStrategySummary" })
  @Type(() => StrategySummary)
  listApplicationComponentStrategySummary?: StrategySummary[];

  @SpeakeasyMetadata({ elemType: ApplicationComponentSummary })
  @Expose({ name: "listApplicationComponentSummary" })
  @Type(() => ApplicationComponentSummary)
  listApplicationComponentSummary?: ApplicationComponentSummary[];

  @SpeakeasyMetadata({ elemType: ServerStatusSummary })
  @Expose({ name: "listServerStatusSummary" })
  @Type(() => ServerStatusSummary)
  listServerStatusSummary?: ServerStatusSummary[];

  @SpeakeasyMetadata({ elemType: StrategySummary })
  @Expose({ name: "listServerStrategySummary" })
  @Type(() => StrategySummary)
  listServerStrategySummary?: StrategySummary[];

  @SpeakeasyMetadata({ elemType: ServerSummary })
  @Expose({ name: "listServerSummary" })
  @Type(() => ServerSummary)
  listServerSummary?: ServerSummary[];
}
