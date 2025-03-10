/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Contains information about a table restore request.
 */
export class TableRestoreStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "namespaceName" })
  namespaceName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "newTableName" })
  newTableName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "progressInMegaBytes" })
  progressInMegaBytes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "requestTime" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  requestTime?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "snapshotName" })
  snapshotName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceDatabaseName" })
  sourceDatabaseName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceSchemaName" })
  sourceSchemaName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceTableName" })
  sourceTableName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "tableRestoreRequestId" })
  tableRestoreRequestId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetDatabaseName" })
  targetDatabaseName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetSchemaName" })
  targetSchemaName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "totalDataInMegaBytes" })
  totalDataInMegaBytes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "workgroupName" })
  workgroupName?: string;
}
