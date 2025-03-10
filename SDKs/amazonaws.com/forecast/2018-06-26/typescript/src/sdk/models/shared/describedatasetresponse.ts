/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DatasetTypeEnum } from "./datasettypeenum";
import { DomainEnum } from "./domainenum";
import { EncryptionConfig } from "./encryptionconfig";
import { Schema } from "./schema";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Success
 */
export class DescribeDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CreationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  creationTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "DataFrequency" })
  dataFrequency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DatasetType" })
  datasetType?: DatasetTypeEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "Domain" })
  domain?: DomainEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "EncryptionConfig" })
  @Type(() => EncryptionConfig)
  encryptionConfig?: EncryptionConfig;

  @SpeakeasyMetadata()
  @Expose({ name: "LastModificationTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastModificationTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "Schema" })
  @Type(() => Schema)
  schema?: Schema;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: string;
}
