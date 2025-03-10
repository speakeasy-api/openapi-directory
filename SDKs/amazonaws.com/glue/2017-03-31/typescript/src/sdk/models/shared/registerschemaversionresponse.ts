/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SchemaVersionStatusEnum } from "./schemaversionstatusenum";
import { Expose } from "class-transformer";

/**
 * Success
 */
export class RegisterSchemaVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "SchemaVersionId" })
  schemaVersionId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: SchemaVersionStatusEnum;

  @SpeakeasyMetadata()
  @Expose({ name: "VersionNumber" })
  versionNumber?: number;
}
