/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DataQualitySummary } from "./dataqualitysummary";
import { DatasetStatusEnum } from "./datasetstatusenum";
import { IngestedFilesSummary } from "./ingestedfilessummary";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CreatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "DataEndTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dataEndTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "DataQualitySummary" })
  @Type(() => DataQualitySummary)
  dataQualitySummary?: DataQualitySummary;

  @SpeakeasyMetadata()
  @Expose({ name: "DataStartTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  dataStartTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "IngestedFilesSummary" })
  @Type(() => IngestedFilesSummary)
  ingestedFilesSummary?: IngestedFilesSummary;

  @SpeakeasyMetadata()
  @Expose({ name: "IngestionInputConfiguration" })
  @Type(() => IngestionInputConfiguration)
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "LastUpdatedAt" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Schema" })
  schema?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: DatasetStatusEnum;
}
