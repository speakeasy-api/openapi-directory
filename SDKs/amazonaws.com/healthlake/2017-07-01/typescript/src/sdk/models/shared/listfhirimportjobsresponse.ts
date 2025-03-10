/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ImportJobProperties } from "./importjobproperties";
import { Expose, Type } from "class-transformer";

/**
 * Success
 */
export class ListFHIRImportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ImportJobProperties })
  @Expose({ name: "ImportJobPropertiesList" })
  @Type(() => ImportJobProperties)
  importJobPropertiesList: ImportJobProperties[];

  @SpeakeasyMetadata()
  @Expose({ name: "NextToken" })
  nextToken?: string;
}
