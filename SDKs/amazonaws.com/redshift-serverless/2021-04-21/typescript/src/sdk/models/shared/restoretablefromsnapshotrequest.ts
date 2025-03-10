/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class RestoreTableFromSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "activateCaseSensitiveIdentifier" })
  activateCaseSensitiveIdentifier?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "namespaceName" })
  namespaceName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "newTableName" })
  newTableName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "snapshotName" })
  snapshotName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceDatabaseName" })
  sourceDatabaseName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceSchemaName" })
  sourceSchemaName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceTableName" })
  sourceTableName: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetDatabaseName" })
  targetDatabaseName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "targetSchemaName" })
  targetSchemaName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "workgroupName" })
  workgroupName: string;
}
