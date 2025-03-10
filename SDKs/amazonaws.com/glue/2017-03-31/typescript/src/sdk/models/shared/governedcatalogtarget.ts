/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CatalogSchemaChangePolicy } from "./catalogschemachangepolicy";
import { Expose, Type } from "class-transformer";

/**
 * Specifies a data target that writes to Amazon S3 using the Glue Data Catalog.
 */
export class GovernedCatalogTarget extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Database" })
  database: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Inputs" })
  inputs: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PartitionKeys" })
  partitionKeys?: string[][];

  @SpeakeasyMetadata()
  @Expose({ name: "SchemaChangePolicy" })
  @Type(() => CatalogSchemaChangePolicy)
  schemaChangePolicy?: CatalogSchemaChangePolicy;

  @SpeakeasyMetadata()
  @Expose({ name: "Table" })
  table: string;
}
