/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { S3ReferenceDataSourceDescription } from "./s3referencedatasourcedescription";
import { SourceSchema } from "./sourceschema";
import { Expose, Type } from "class-transformer";

/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
 */
export class ReferenceDataSourceDescription extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "ReferenceId" })
  referenceId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "ReferenceSchema" })
  @Type(() => SourceSchema)
  referenceSchema?: SourceSchema;

  @SpeakeasyMetadata()
  @Expose({ name: "S3ReferenceDataSourceDescription" })
  @Type(() => S3ReferenceDataSourceDescription)
  s3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription;

  @SpeakeasyMetadata()
  @Expose({ name: "TableName" })
  tableName: string;
}
